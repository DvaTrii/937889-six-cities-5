import * as React from "react";
import * as renderer from "react-test-renderer";
import {LoginForm} from "./login-form";
import {noop} from "../../utils";

it(`Should LoginForm render properly`, () => {

  const tree = renderer
    .create(
        <LoginForm
          onSubmit={noop}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
