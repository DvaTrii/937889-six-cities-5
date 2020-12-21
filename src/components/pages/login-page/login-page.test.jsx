import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import LoginPage from "./login-page.tsx";

const mockStore = configureStore([]);

it(`Should LoginPage render properly`, () => {
  const store = mockStore({
    APP: {city: `Amsterdam`},
    USER: {
      authorizationStatus: false,
      userInfo: {name: ``},
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
