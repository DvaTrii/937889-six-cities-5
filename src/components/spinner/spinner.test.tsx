import * as React from "react";
import * as renderer from "react-test-renderer";
import {Spinner} from "./spinner";

it(`Should Spinner render properly`, () => {

  const tree = renderer
    .create(
        <Spinner />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
