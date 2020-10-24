import {SorterType} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const sortOffers = (offers, activeSorter) => {
  let sortedOffers = offers;

  switch (activeSorter) {
    case SorterType.POPULAR:
      sortedOffers = offers.slice();
      break;
    case SorterType.PRICE_HIGH_TO_LOW:
      sortedOffers = offers.slice().sort((a, b) => b.price - a.price);
      break;
    case SorterType.PRICE_LOW_TO_HIGH:
      sortedOffers = offers.slice().sort((a, b) => a.price - b.price);
      break;
    case SorterType.TOP_RATED_FIRST:
      sortedOffers = offers.slice().sort((a, b) => b.rating - a.rating);
      break;
  }
  return sortedOffers;
};
