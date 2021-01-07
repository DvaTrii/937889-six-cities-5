import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "./app";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe(`Render App`, () => {

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
      offers: []
    }
  });

  it(`Render App`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
