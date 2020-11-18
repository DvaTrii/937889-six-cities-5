import React, {useEffect} from "react";
import Header from "../../header/header";
import FavoritesList from "../../favorites-list/favorites-list";
import Footer from "../../footer/footer";
import PropTypes from "prop-types";
import {getFavoritesOffersNumber} from "../../../store/data/selectors";
import {FavoritesPageClasses} from "../../../const";
import {connect} from "react-redux";
import FavoritesEmpty from "../../favorites-empty/favorites-empty";
import {fetchFavoritesOffersList} from "../../../store/data/operations";

const FavoritesPage = ({favoritesNumber, getFavoritesOffers}) => {

  useEffect(() => {
    getFavoritesOffers();
  }, []);

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

// class FavoritesPage extends React.PureComponent {
//   constructor(props) {
//     super(props);
//   }
//
//   componentDidMount() {
//     this.props.getFavoritesOffers();
//   }
//
//   render() {
//     return (
//       <div className={`page
//       ${this.props.favoritesNumber || FavoritesPageClasses.PAGE}`}>
//
//         <Header />
//
//         <main className={`page__main page__main--favorites
//       ${this.props.favoritesNumber || FavoritesPageClasses.MAIN}`}>
//
//           {this.props.favoritesNumber ? <FavoritesList /> : <FavoritesEmpty />}
//
//         </main>
//
//         <Footer />
//
//       </div>
//     );
//   }
// }

FavoritesPage.propTypes = {
  favoritesNumber: PropTypes.number.isRequired,
  getFavoritesOffers: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return ({
    favoritesNumber: getFavoritesOffersNumber(state)
  });
};

const mapDispatchToProps = (dispatch) => ({
  getFavoritesOffers() {
    dispatch(fetchFavoritesOffersList());
  }
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
