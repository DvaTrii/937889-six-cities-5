import * as React from "react";
import {connect} from "react-redux";
import {login} from "../../store/user/operations";

type Props = {
  onSubmit: ({login, password}: { login: string; password: string }) => void;
};

const LoginForm: React.FC<Props> = ({onSubmit}) => {

  const loginRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          ref={loginRef}
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          ref={passwordRef}
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );

};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {LoginForm};
export default connect(null, mapDispatchToProps)(LoginForm);
