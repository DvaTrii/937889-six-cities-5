import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {FavoritesButton} from "./favorites-button";
import {noop} from "../../utils";

const mockStore = configureStore([]);

it(`Should FavoritesButton render properly`, () => {

  const classPrefix: string = `place-card`;
  const offerId: number = 23;
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
