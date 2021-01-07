import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./header";

describe(`<Header> render`, () => {
  it(`Should Header render properly with authorized user`, () => {
    const authorizationStatus: boolean = true;
    const userName: string = `Michael`;

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
    const authorizationStatus: boolean = false;
    const userName: string = ``;

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
