import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CitiesList from "../../cities-list/cities-list";

import OffersList from "../../offers-list/offers-list";
import Header from "../../header/header";
import Map from "../../map/map";

import {CardClass, Cities} from "../../../const";

const MainPage = (props) => {

  const {offers, city} = props;

  const currentOffers = offers.filter((it) => it.city === city);

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">

        <CitiesList cities={Cities} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
                {/* <select className="places__sorting-type" id="places-sorting">*/}
                {/*  <option className="places__option" value="popular" selected="">Popular</option>*/}
                {/*  <option className="places__option" value="to-high">Price: low to high</option>*/}
                {/*  <option className="places__option" value="to-low">Price: high to low</option>*/}
                {/*  <option className="places__option" value="top-rated">Top rated first</option>*/}
                {/* </select>*/}
              </form>
              <div className="cities__places-list places__list tabs__content">

                <OffersList
                  offers={currentOffers}
                  cardClass={CardClass.MAIN}/>

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={currentOffers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);

