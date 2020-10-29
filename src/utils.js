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

// адаптер для изменения структуры данных оффера

export const adaptOffer = (offer) => {
  return {
    id: offer[`id`],
    city: {
      name: offer[`city`][`name`],
      coordinates: { // был [33, 33]
        latitude: offer[`city`][`location`][`latitude`],
        longitude: offer[`city`][`location`][`longitude`]
      }
    },
    coordinates: {
      latitude: offer[`location`][`latitude`],
      longitude: offer[`location`][`longitude`]
    },
    pictures: offer[`images`],
    previewImage: offer[`preview_image`], // не было - +
    isPremium: offer[`is_premium`],
    isBookmark: offer[`is_favourite`],
    price: offer[`price`],
    title: offer[`title`],
    type: offer[`type`],
    rating: offer[`rating`],
    description: offer[`description`],
    bedroomsMax: offer[`bedrooms`], // number +
    guestsMax: offer[`max_adults`], // number +
    amenities: offer[`goods`],
    hostInfo: {
      avatar: offer[`host`][`avatar_url`],
      name: offer[`host`][`name`],
      isSuper: offer[`host`][`is_pro`],
    },
    nearOffers: [] // no information
  };
};
