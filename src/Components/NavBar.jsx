import React, {useState, useEffect} from "react";
import {useHistory} from "react-router";
import "../Styles/Components/NavBar.scss";

export const NavBar = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <div className="content">
        <img
          onClick={() => history.push("/")}
          className="logo"
          alt="Netflix logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        />

        <img
          onClick={() => history.push("/profile")}
          className="avatar"
          alt="Profile img"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
      </div>
    </div>
  );
};

export default NavBar;
