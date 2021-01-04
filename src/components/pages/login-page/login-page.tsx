import * as React from "react";
import {connect} from "react-redux";

import Header from "../../header/header";

import {getActiveCity} from "../../../store/app/selectors";
import LoginForm from "../../login-form/login-form";

import {Cities} from "../../../types";

type Props = {
  city: Cities
}

const LoginPage: React.FC<Props> = ({city}) => {
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

const mapStateToProps = (state) => ({
  city: getActiveCity(state),
});

export {LoginPage};
export default connect(mapStateToProps)(LoginPage);
