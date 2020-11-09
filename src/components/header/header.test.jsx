import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {Header} from "./header";

describe(`<Header> render`, () => {
  it(`Should Header render properly with authorized user`, () => {
    const authorizationStatus = true;
    const userName = `Michael`;

    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus={authorizationStatus}
              userName={userName}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should Header render properly with unauthorized user`, () => {
    const authorizationStatus = false;
    const userName = ``;

    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus={authorizationStatus}
              userName={userName}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
