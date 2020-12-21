import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {FavoritesButton} from "./favorites-button.tsx";

const mockStore = configureStore([]);

it(`Should FavoritesButton render properly`, () => {

  const classPrefix = `place-card`;
  const offerId = 23;
  const noop = () => {};
  const store = mockStore({});

  const tree = renderer
    .create(
        <Provider store={store}>
          <FavoritesButton
            classPrefix={classPrefix}
            offerId={offerId}
            toggleIsBookmarkProperty={noop}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
