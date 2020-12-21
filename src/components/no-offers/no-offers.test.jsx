import React from "react";
import renderer from "react-test-renderer";
import {NoOffers} from "./no-offers.tsx";

it(`Should NoOffers render properly`, () => {
  const city = `Amsterdam`;

  const tree = renderer
    .create(
        <NoOffers
          city={city}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
