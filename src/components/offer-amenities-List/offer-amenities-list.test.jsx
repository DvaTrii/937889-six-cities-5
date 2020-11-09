import React from "react";
import renderer from "react-test-renderer";
import OfferAmenitiesList from "./offer-amenities-list";


it(`Should OfferAmenitiesList render properly`, () => {
  const amenities = [
    `Wifi`, `Parking`, `Dishwasher`
  ];

  const tree = renderer
    .create(
        <OfferAmenitiesList
          amenities={amenities}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
