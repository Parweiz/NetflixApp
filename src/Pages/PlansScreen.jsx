import React, {useState, useEffect} from "react";
import {db} from "../Components/Config/Firebase";
import "../Styles/Pages/PlansScreen.scss";

import {
  collection,
  query,
  where,
  getDocs,
  doc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import {useSelector} from "react-redux";
import {selectUser} from "../Components/Store/UserSlice";

import {loadStripe} from "@stripe/stripe-js";

const PlansScreen = () => {
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const user = useSelector(selectUser);

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "products"), where("active", "==", true));

      await getDocs(q).then((querySnapshot) => {
        const products = {};

        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await getDocs(collection(productDoc.ref, "prices"));
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data,
            };
          });
        });

        setProducts(products);
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchSubscriptions() {
      const docRef = doc(db, "customers", user.uid);
      const collectn = collection(docRef, "subscriptions");

      await getDocs(collectn).then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
    }
    fetchSubscriptions();
  }, [user.uid]);

  console.log(subscription);

  const loadCheckout = async (priceId) => {
    const document = doc(db, "customers", user.uid);
    const docRef = await addDoc(collection(document, "checkout_sessions"), {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });
    // Wait for the CheckoutSession to get attached by the extension
    onSnapshot(docRef, async (snap) => {
      const {error, url, sessionId} = snap.data();
      if (error) {
        alert(`An error occured: ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51JZxaqFz2fQ8IxAyzyVXONrdHFexFE3fVSblcIpLBe8D0oVQrd23c38XCTJLQSsN9MJEJE0JkNmWZnFLZNoMZkQY00BWwrPEPP"
        );
        stripe.redirectToCheckout({sessionId});
      }
    });
  };

  return (
    <div className="plans">
      <br />
      {subscription && (
        <p>
          Renewal Date:{" "}
          {new Date(
            subscription?.current_period_end * 1800
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);

        return (
          <div
            className={`${isCurrentPage && "plan_disabled"} plan`}
            key={productId}
          >
            <div className="planInfo">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button
              onClick={() =>
                !isCurrentPage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreen;
