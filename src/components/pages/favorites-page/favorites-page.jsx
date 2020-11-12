import React from "react";
import Header from "../../header/header";
import FavoritesList from "../../favorites-list/favorites-list";
import Footer from "../../footer/footer";
import PropTypes from "prop-types";
import {getFavoritesOffersNumber} from "../../../store/data/selectors";
import {FavoritesPageClasses} from "../../../const";
import {connect} from "react-redux";
import FavoritesEmpty from "../../favorites-empty/favorites-empty";

const FavoritesPage = ({favoritesNumber}) => {

  return (
    <div className={`page
      ${favoritesNumber || FavoritesPageClasses.PAGE}`}>

      <Header />

      <main className={`page__main page__main--favorites
      ${favoritesNumber || FavoritesPageClasses.MAIN}`}>

        {favoritesNumber ? <FavoritesList /> : <FavoritesEmpty />}

      </main>

      <Footer />

    </div>
  );
};

FavoritesPage.propTypes = {
  favoritesNumber: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return ({
    favoritesNumber: getFavoritesOffersNumber(state)
  });
};

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
