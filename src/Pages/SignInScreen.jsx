import React, {useRef} from "react";
import {auth} from "../Components/Config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import "../Styles/Pages/SignInScreen.scss";

const SignIn = () => {
  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      pwdRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode + "- " + errorMessage);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      pwdRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode + "- " + errorMessage);
      });
  };
  return (
    <div className="signInScreen">
      <form>
        <h1 className="title">Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={pwdRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4 className="newAcc">
          <span className="gray">New to Netflix? </span>
          <span className="link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
