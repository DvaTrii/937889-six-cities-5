import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const Footer = () => {
  return (
    <footer className="footer container">
      <Link to={AppRoute.MAIN} className="footer__logo-link">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
      </Link>
    </footer>
  );
};

export default Footer;
