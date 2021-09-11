import React from "react";
import NavBar from "../Components/NavBar";
import "../Styles/Pages/ProfileScreen.scss";
import {signOut} from "firebase/auth";
import {auth} from "../Components/Config/Firebase";
import {useSelector} from "react-redux";
import {selectUser} from "../Components/Store/UserSlice";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <NavBar />
      <div className="body">
        <h1>Edit Profile</h1>
        <div className="info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="details">
            <h2>{user.email}</h2>
            <div className="plans">
              <h3>Plans</h3>
              <button onClick={() => signOut(auth)} className="btnSignOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
