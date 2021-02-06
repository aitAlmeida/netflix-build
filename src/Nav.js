import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
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
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://th.bing.com/th/id/Re0fb2f11338b8b9bc8595f44a09f4091?rik=f%2fgufNZj%2foyMIg&riu=http%3a%2f%2fnativeadvertisinginstitute.com%2fwp-content%2fuploads%2f2015%2f03%2fNetflix_Logo_Digital-Video.png&ehk=qwvBugudvcTWKnUHtXeS%2fE9o8mq%2bwYSz%2fXY8EORlmTQ%3d&risl=&pid=ImgRaw"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
