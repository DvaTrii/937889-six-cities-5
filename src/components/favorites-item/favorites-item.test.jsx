import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import configureStore from "redux-mock-store";
import FavoritesItem from "./favorites-item";

const mockStore = configureStore([]);


it(`Should FavoritesItem render properly`, () => {

  const store = mockStore({
    APP: {hoveredOfferId: -1},
  });
  const cards = [{
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
    type: `Apartment`,
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
  }];

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <FavoritesItem
              offers={cards}
              city={`Amsterdam`}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
