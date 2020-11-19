import React from "react";
import {connect} from "react-redux";
import {setCurrentCity} from "../../store/app/actions";
import PropTypes from "prop-types";

import {Cities, CurrentCityClass} from "../../const";
import {getCities, getActiveCity} from "../../store/app/selectors";

const CitiesList = ({cities, city, setCurrentCityAction}) => {

  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((item, index) => {
              return (
                <li key={item + index}
                  className="locations__item"
                  onClick={() => setCurrentCityAction(item)} >
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
  cities: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  setCurrentCityAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  city: getActiveCity(state),
  cities: getCities(Cities)
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCityAction(city) {
    dispatch(setCurrentCity(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
