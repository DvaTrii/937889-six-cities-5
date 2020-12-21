import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {AppRoute, AuthorizationStatus} from "../../const";
import {getAuthorizationStatus, getUserEmail} from "../../store/user/selectors";

const Header = ({authorizationStatus, userName}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.MAIN} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">
                    { authorizationStatus === AuthorizationStatus.NO_AUTH ?
                      `Sign In` :
                      userName}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Header.propTypes = {
//   authorizationStatus: PropTypes.bool.isRequired,
//   userName: PropTypes.string
// };

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userName: getUserEmail(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
