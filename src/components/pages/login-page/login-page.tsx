import * as React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Header from "../../header/header.tsx";

import {getActiveCity} from "../../../store/app/selectors";
import LoginForm from "../../login-form/login-form";

const LoginPage = ({city}) => {
  return (
    <div className="page page--gray page--login">

      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <LoginForm />

          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link">
                <span>{city}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

LoginPage.propTypes = {
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  city: getActiveCity(state),
});

export {LoginPage};
export default connect(mapStateToProps)(LoginPage);
