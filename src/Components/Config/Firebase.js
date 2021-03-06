import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxLaKsqqMU2B4pRImNenJief_TzOBzhEs",
  authDomain: "netflix-7b81d.firebaseapp.com",
  projectId: "netflix-7b81d",
  storageBucket: "netflix-7b81d.appspot.com",
  messagingSenderId: "161537308217",
  appId: "1:161537308217:web:955c12b1e9868e8e16bfe8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth};

