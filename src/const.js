export const OfferType = {
  APARTMENT: `Apartment`,
  ROOM: `Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
};

export const CardClass = {
  MAIN: `cities__place-`,
  NEAR: `near-places__`,
  FAVORITE: `favorites__`
};

export const MainPageNoOffersClass = {
  NO_OFFERS: `page__main--index-empty`
};

export const CurrentCityClass = {
  ACTIVE: `tabs__item--active`
};

export const FavoritesPageClasses = {
  PAGE: `page--favorites-empty`,
  MAIN: `page__main--favorites-empty`
};

export const FavoritesButtonClassPrefix = {
  MAIN: `place-card`,
  PROPERTY: `property`,
};

export const Cities = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`,
};

export const SorterActiveClass = {
  ACTIVE: `places__option--active`
};

export const SorterType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const SorterListOpenedClass = {
  OPENED: `places__options--opened`
};

export const AuthorizationStatus = {
  AUTH: true,
  NO_AUTH: false,
};

export const REVIEWS_NUMBER = 10;

export const Months = {
  1: `January`,
  2: `February`,
  3: `March`,
  4: `April`,
  5: `May`,
  6: `June`,
  7: `July`,
  8: `August`,
  9: `September`,
  10: `October`,
  11: `November`,
  12: `December`,
};

export const FavoritesRequestType = {
  PUT_IN: 1,
  POP_OUT: 0
};

export const PHOTOS_NUMBER = 6;

export const ReviewSymbolsNumber = {
  MIN: 50,
  MAX: 300
};
