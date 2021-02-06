import React, { useState } from "react";
import "./Login.css";
import SignUp from "./SignUp";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://th.bing.com/th/id/Re0fb2f11338b8b9bc8595f44a09f4091?rik=f%2fgufNZj%2foyMIg&riu=http%3a%2f%2fnativeadvertisinginstitute.com%2fwp-content%2fuploads%2f2015%2f03%2fNetflix_Logo_Digital-Video.png&ehk=qwvBugudvcTWKnUHtXeS%2fE9o8mq%2bwYSz%2fXY8EORlmTQ%3d&risl=&pid=ImgRaw"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="login__button">
          Sign In
        </button>
        <div className="login__gradient" />
        <div className="login__body">
          {signIn ? (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="login__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="login__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          ) : (
            <SignUp />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
