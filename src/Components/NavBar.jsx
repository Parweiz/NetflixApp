import React, {useState, useEffect} from "react";
import "../Styles/Components/NavBar.scss";

export const NavBar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <div className="content">
        <img
          className="logo"
          alt="Netflix logo"
          // src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        />

        <img
          className="avatar"
          alt="Profile img"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
      </div>
    </div>
  );
};

export default NavBar;
