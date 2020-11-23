import {SorterType, REVIEWS_NUMBER, PHOTOS_NUMBER} from "./const";

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

export const sortReviews = (reviews) => {
  return reviews.slice().sort((a, b) => b.date - a.date).slice(0, REVIEWS_NUMBER);
};

export const adaptOffer = (offer) => {
  return {
    id: offer[`id`],
    city: {
      name: offer[`city`][`name`],
      coordinates: {
        latitude: offer[`city`][`location`][`latitude`],
        longitude: offer[`city`][`location`][`longitude`],
        zoom: offer[`city`][`location`][`zoom`]
      }
    },
    coordinates: {
      latitude: offer[`location`][`latitude`],
      longitude: offer[`location`][`longitude`],
      zoom: Number(offer[`location`][`zoom`] - 2)
    },
    pictures: offer[`images`].slice(0, PHOTOS_NUMBER),
    previewImage: offer[`preview_image`],
    isPremium: offer[`is_premium`],
    isBookmark: offer[`is_favorite`],
    price: offer[`price`],
    title: offer[`title`],
    type: offer[`type`],
    rating: Math.round(offer[`rating`]),
    description: offer[`description`],
    bedroomsMax: offer[`bedrooms`],
    guestsMax: offer[`max_adults`],
    amenities: offer[`goods`],
    hostInfo: {
      avatar: offer[`host`][`avatar_url`],
      name: offer[`host`][`name`],
      isSuper: offer[`host`][`is_pro`],
    }
  };
};

export const adaptReview = (review) => {
  return {
    id: review[`id`],
    date: Date.parse(review[`date`]),
    text: review[`comment`],
    rating: review[`rating`],
    userInfo: {
      avatar: review[`user`][`avatar_url`],
      name: review[`user`][`name`],
      id: review[`user`][`id`],
      isSuper: review[`user`][`is_pro`],
    },
  };
};
