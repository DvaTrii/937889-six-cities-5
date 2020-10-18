import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";

import {CurrentCityClass} from "../../const";

const CitiesList = ({cities, city, setCurrentCity}) => {

  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.values(cities).map((item, index) => {
              return (
                <li key={item + index}
                  className="locations__item"
                  onClick={() => setCurrentCity(item)} >
                  <a className={`locations__item-link tabs__item ${item === city ? CurrentCityClass.ACTIVE : ``}`}
                    href="#">
                    <span>{item}</span>
                  </a>
                </li>);
            })}
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  setCurrentCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCity(city) {
    dispatch(ActionCreator.setCurrentCity(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
