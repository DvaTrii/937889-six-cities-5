import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list";

const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`];

it(`Should CitiesList render properly`, () => {
  const tree = renderer
    .create(
        <CitiesList
          city={cities[3]}
          cities={cities}
          setCurrentCityAction={() => {}}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
