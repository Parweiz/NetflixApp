import {useState} from "react";
import "../Styles/Pages/FrontScreen.scss";
import SignInScreen from "./SignInScreen";

const FrontScreen = () => {
  const [signIn, setSignIn] = useState(false);

  const heroSection = (
    <div className="hero">
      {signIn ? (
        <SignInScreen />
      ) : (
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="input">
            <form>
              <input type="email" placeholder="Email address" />
              <button className="btnGetStarted" onClick={() => setSignIn(true)}>
                GET STARTED
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="frontpage">
      <div className="header-wrapper">
        <img
          className="logo"
          alt="Netflix logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        />
        <button className="btnSignIn" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="gradient" />
      </div>

      <div className="body">{heroSection}</div>
    </div>
  );
};

export default FrontScreen;
