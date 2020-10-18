import React from "react";
import PropTypes from "prop-types";

const CitiesList = ({cities}) => {


  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.values(cities).map((city, index) => {
              return (
                <li key={city + index} className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>{city}</span>
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
  cities: PropTypes.object.isRequired
};

export default CitiesList;
