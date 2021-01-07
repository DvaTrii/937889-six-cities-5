import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import configureStore from "redux-mock-store";
import FavoritesItem from "./favorites-item";
import {Cities, OfferCardType} from "../../types";

const mockStore = configureStore([]);


it(`Should FavoritesItem render properly`, () => {

  const store = mockStore({
    APP: {hoveredOfferId: -1},
  });
  const cards: Array<OfferCardType> = [{
    id: 101,
    city: {
      name: `Amsterdam`,
      coordinates: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      }
    },
    coordinates: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    previewImage: `img/apartment-02.jpg`,
    pictures: [`img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`],
    isPremium: true,
    isBookmark: true,
    price: 100,
    title: `Wood and stone place`,
    type: `Apartment`,
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
  }];

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <FavoritesItem
              offers={cards}
              city={Cities.AMSTERDAM}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
