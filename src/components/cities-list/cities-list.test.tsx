import * as React from "react";
import * as renderer from "react-test-renderer";
import {CitiesList} from "./cities-list";
import {noop} from "../../utils";

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
          setCurrentCityAction={noop}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
