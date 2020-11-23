import {ActionType} from "./actions";
import {data} from "./data";
import {OfferType} from "../../const";

const state = {
  offers: [],
  reviews: [],
  offerById: {},
  nearOffersById: [],
  favoritesOffers: [],
  isLoadedOffers: false,
  isLoadedReviews: false,
  isLoadedOfferById: false,
  isLoadedNearOffers: false,
  isLoadedFavoritesOffers: false,
};

const offers = [
  {
    id: 101,
    city: {
      name: `Amsterdam`,
      coordinates: { // был [33, 33]
        latitude: 52.38333,
        longitude: 4.9
      }
    },
    coordinates: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    },
    previewImage: `img/apartment-02.jpg`,
    pictures: [`img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`],
    isPremium: true,
    isBookmark: true,
    price: 100,
    title: `Wood and stone place`,
    type: OfferType.APARTMENT,
    rating: 5,
    description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`,
    bedroomsMax: `4 Bedrooms`,
    guestsMax: `Max 5 adults`,
    amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Parking`, `Flowers`, `Dishwasher`, `Towels`, `TV`],
    hostInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Ross`,
      isSuper: true,
    },
  },
  {
    id: 102,
    city: {
      name: `Amsterdam`,
      coordinates: { // был [33, 33]
        latitude: 52.38333,
        longitude: 4.9
      }
    },
    coordinates: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198
    },
    previewImage: `img/apartment-02.jpg`,
    pictures: [`img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`],
    isPremium: false,
    isBookmark: true,
    price: 80,
    title: `Nice, cozy, warm big bed apartment`,
    type: OfferType.HOTEL,
    rating: 4,
    description: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit`,
    bedroomsMax: `4 Bedrooms`,
    guestsMax: `Max 5 adults`,
    amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Dishwasher`, `Towels`, `TV`],
    hostInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Chandler`,
      isSuper: true,
    },
  },
  {
    id: 103,
    city: {
      name: `Amsterdam`,
      coordinates: { // был [33, 33]
        latitude: 52.38333,
        longitude: 4.9
      }
    },
    coordinates: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198
    },
    previewImage: `img/apartment-02.jpg`,
    pictures: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isPremium: false,
    isBookmark: false,
    price: 120,
    title: `Canal View Prinsengracht`,
    type: OfferType.HOUSE,
    rating: 3,
    description: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam`,
    bedroomsMax: `1 Bedroom`,
    guestsMax: `Max 2 adults`,
    amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Dishwasher`, `Towels`, `TV`],
    hostInfo: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Monica`,
      isSuper: false,
    },
  },
];

const reviews = [
  {
    id: 300,
    date: `April 2019`,
    userInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Tom`
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    rating: 4
  },
  {
    id: 333,
    reviewDate: `March 2020`,
    userInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Bob`
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    rating: 3
  },
  {
    id: 344,
    reviewDate: `May 2021`,
    userInfo: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Jess`
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    rating: 2
  },
  {
    id: 455,
    reviewDate: `June 2022`,
    userInfo: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Mary`
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    rating: 5
  },
];

const offer = offers[0];

const nearOffers = offers;

const updatedReviews = [
  {
    id: 300,
    date: `April 2019`,
    userInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Tom`
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    rating: 4
  },
  {
    id: 333,
    reviewDate: `March 2020`,
    userInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Bob`
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    rating: 3
  },
  {
    id: 344,
    reviewDate: `May 2021`,
    userInfo: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Jess`
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    rating: 2
  },
  {
    id: 455,
    reviewDate: `June 2022`,
    userInfo: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Mary`
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    rating: 5
  },
  {
    id: 500,
    date: `April 2019`,
    userInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Tom`
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    rating: 4
  },
];

const offerToggledIsBookmark = {
  id: 103,
  city: {
    name: `Amsterdam`,
    coordinates: { // был [33, 33]
      latitude: 52.38333,
      longitude: 4.9
    }
  },
  coordinates: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198
  },
  previewImage: `img/apartment-02.jpg`,
  pictures: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
  isPremium: false,
  isBookmark: true,
  price: 120,
  title: `Canal View Prinsengracht`,
  type: OfferType.HOUSE,
  rating: 3,
  description: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam`,
  bedroomsMax: `1 Bedroom`,
  guestsMax: `Max 2 adults`,
  amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Dishwasher`, `Towels`, `TV`],
  hostInfo: {
    avatar: `img/avatar-angelina.jpg`,
    name: `Monica`,
    isSuper: false,
  },
};

const favoritesOffers = offers.slice(0, 1);


it(`Reducer without additional parameters should return initial state`, () => {
  expect(data(void 0, {})).toEqual(state);
});

it(`Reducer should update offers by load offers`, () => {
  expect(data({offers: []},
      {
        type: ActionType.LOAD_OFFERS,
        payload: offers
      })).toEqual({
    offers
  });
});

it(`Reducer should update reviews by load reviews`, () => {
  expect(data({reviews: []},
      {
        type: ActionType.LOAD_REVIEWS,
        payload: reviews
      })).toEqual({
    reviews
  });
});

it(`Reducer should update offerById by load offer`, () => {
  expect(data({offerById: []},
      {
        type: ActionType.LOAD_OFFER_BY_ID,
        payload: offer
      })).toEqual({
    offerById: offer
  });
});

it(`Reducer should update nearOffersById by load nearOffers`, () => {
  expect(data({nearOffersById: []},
      {
        type: ActionType.LOAD_NEAR_OFFERS_BY_ID,
        payload: nearOffers
      })).toEqual({
    nearOffersById: nearOffers
  });
});

it(`Reducer should update favoritesOffers by load favoritesOffers`, () => {
  expect(data({favoritesOffers: []},
      {
        type: ActionType.LOAD_FAVORITES_OFFERS,
        payload: favoritesOffers
      })).toEqual({
    favoritesOffers
  });
});

it(`Reducer should update isLoadedOffers by set true`, () => {
  expect(data({isLoadedOffers: false},
      {
        type: ActionType.SET_IS_LOAD_FLAG_OFFERS,
        payload: true
      })).toEqual({
    isLoadedOffers: true
  });
});

it(`Reducer should update isLoadedOfferById by set true`, () => {
  expect(data({isLoadedOfferById: false},
      {
        type: ActionType.SET_IS_LOAD_FLAG_OFFER,
        payload: true
      })).toEqual({
    isLoadedOfferById: true
  });
});

it(`Reducer should update isLoadedReviews by set true`, () => {
  expect(data({isLoadedReviews: false},
      {
        type: ActionType.SET_IS_LOAD_FLAG_REVIEWS,
        payload: true
      })).toEqual({
    isLoadedReviews: true
  });
});

it(`Reducer should update isLoadedNearOffers by set true`, () => {
  expect(data({isLoadedNearOffers: false},
      {
        type: ActionType.SET_IS_LOAD_FLAG_NEAR_OFFERS,
        payload: true
      })).toEqual({
    isLoadedNearOffers: true
  });
});

it(`Reducer should update isLoadedFavoritesOffers by set true`, () => {
  expect(data({isLoadedFavoritesOffers: false},
      {
        type: ActionType.SET_IS_LOAD_FLAG_FAVORITES_OFFERS,
        payload: true
      })).toEqual({
    isLoadedFavoritesOffers: true
  });
});

it(`Reducer should update reviews by receive updatedReviews`, () => {
  expect(data({reviews},
      {
        type: ActionType.SET_USER_REVIEW,
        payload: updatedReviews
      })).toEqual({
    reviews: updatedReviews
  });
});

it(`Reducer should update favorites offers`, () => {
  expect(data({offers: [], offerById: offers[2], nearOffersById: [], favoritesOffers: []},
      {
        type: ActionType.TOGGLE_OFFER_IS_BOOKMARK,
        payload: offerToggledIsBookmark
      })).toEqual({
    offers: [],
    offerById: offerToggledIsBookmark,
    nearOffersById: [],
    favoritesOffers: []
  });
});
