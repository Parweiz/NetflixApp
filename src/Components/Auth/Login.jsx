import "../../Styles/Components/Auth/Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="header">
        <img
          className="logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="btnSignIn" onClick>
          Sign In
        </button>

        <div className="gradient" />
      </div>

      <div className="body">
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
        </>
      </div>
    </div>
  );
};

export default Login;
