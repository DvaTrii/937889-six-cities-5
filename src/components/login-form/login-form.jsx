import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/user/actions";

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={this.handleSubmit}>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            ref={this.loginRef}
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required=""/>
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            ref={this.passwordRef}
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required="" />
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {LoginForm};
export default connect(null, mapDispatchToProps)(LoginForm);
