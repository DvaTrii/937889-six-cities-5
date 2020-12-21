import React from "react";
import renderer from "react-test-renderer";
import FavoritesEmpty from "./favorites-empty.tsx";

it(`Should FavoritesEmpty render properly`, () => {

  const tree = renderer
    .create(
        <FavoritesEmpty />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
