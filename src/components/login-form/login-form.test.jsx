import React from "react";
import renderer from "react-test-renderer";
import {LoginForm} from "./login-form";

it(`Should LoginForm render properly`, () => {

  const tree = renderer
    .create(
        <LoginForm
          onSubmit={() => {}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
