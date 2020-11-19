import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import thunk from 'redux-thunk';

import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import OfferPage from "./offer-page";

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
    type: `House`,
    rating: 5,
    description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`,
    bedroomsMax: 4,
    guestsMax: 5,
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
    type: `Hotel`,
    rating: 4,
    description: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit`,
    bedroomsMax: 4,
    guestsMax: 5,
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
    type: `Hotel`,
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
const offerById = {
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
  type: `House`,
  rating: 5,
  description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`,
  bedroomsMax: 4,
  guestsMax: 5,
  amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Parking`, `Flowers`, `Dishwasher`, `Towels`, `TV`],
  hostInfo: {
    avatar: `img/avatar-max.jpg`,
    name: `Ross`,
    isSuper: true,
  },
};

const reviews = [
  {
    id: 300,
    date: 1605357744252,
    userInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Tom`
    },
    text: `Lorem ipsum dolor sit et dolore magna aliqua. Ut enim ad minim veniam`,
    rating: 4
  },
  {
    id: 333,
    reviewDate: 1605357744252,
    userInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Bob`
    },
    text: `Lorem ipsum dolor sir incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    rating: 3
  },
  {
    id: 344,
    date: 1605357744252,
    userInfo: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Jess`
    },
    text: `Lorem eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    rating: 2
  },
  {
    id: 455,
    date: 1605357744252,
    userInfo: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Mary`
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    rating: 5
  },
];
const nearOffersById = offers;

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock(`../../../store/data/operations`,
    () => ({
      fetchNearOffersById: jest.fn(() => jest.fn(() => Promise.resolve())),
      fetchOfferById: jest.fn(() => jest.fn(() => Promise.resolve())),
      fetchReviewsList: jest.fn(() => jest.fn(() => Promise.resolve())),
    })
);


it(`Should OfferPage render properly`, () => {
  const store = mockStore({
    APP: {
      city: `Amsterdam`,
      activeSorter: `Popular`,
      hoveredOfferId: -1,
    },
    USER: {
      authorizationStatus: false,
      userInfo: {email: ``},
    },
    DATA: {
      offers,
      offerById,
      reviews,
      nearOffersById,
      isLoadedOffers: true,
      isLoadedReviews: true,
      isLoadedOfferById: true,
      isLoadedNearOffers: true,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Route
              component={OfferPage}
            />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
