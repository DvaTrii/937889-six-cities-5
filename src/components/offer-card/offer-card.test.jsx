import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {OfferCard} from "./offer-card.tsx";

const mockStore = configureStore([]);

it(`Should OfferCard render properly`, () => {
  const card = {
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
  };

  const cardClass = `cities__place-`;

  const noop = () => {};
  const store = mockStore({});

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <OfferCard
              card={card}
              setHoveredOfferIdAction={noop}
              resetHoveredOfferIdAction={noop}
              cardClass={cardClass}
              getReviewsAction={noop}/>
          </BrowserRouter>
        </Provider>
    )
        .toJSON();
  expect(tree).toMatchSnapshot();
});

