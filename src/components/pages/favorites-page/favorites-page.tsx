import * as React from "react";
import Header from "../../header/header";
import FavoritesList from "../../favorites-list/favorites-list";
import Footer from "../../footer/footer";
import PropTypes from "prop-types";
import {getFavoritesOffers, getFavoritesOffersNumber} from "../../../store/data/selectors";
import {FavoritesPageClasses} from "../../../const";
import {connect} from "react-redux";
import FavoritesEmpty from "../../favorites-empty/favorites-empty";
import {fetchFavoritesOffersList} from "../../../store/data/operations";

const FavoritesPage = ({favoritesNumber, getCurrentFavoritesOffers, favoritesOffers}) => {

  React.useEffect(() => {
    getCurrentFavoritesOffers();
  }, [favoritesOffers]);

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
  favoritesNumber: PropTypes.number.isRequired,
  getCurrentFavoritesOffers: PropTypes.func.isRequired,
  favoritesOffers: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => {
  return ({
    favoritesNumber: getFavoritesOffersNumber(state),
    favoritesOffers: getFavoritesOffers(state)
  });
};

const mapDispatchToProps = (dispatch) => ({
  getCurrentFavoritesOffers() {
    dispatch(fetchFavoritesOffersList());
  }
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
