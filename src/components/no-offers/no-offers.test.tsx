import * as React from "react";
import * as renderer from "react-test-renderer";
import {NoOffers} from "./no-offers";
import {Cities} from "../../types";

it(`Should NoOffers render properly`, () => {
  const city: Cities = Cities.AMSTERDAM;

  const tree = renderer
    .create(
        <NoOffers
          city={city}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
