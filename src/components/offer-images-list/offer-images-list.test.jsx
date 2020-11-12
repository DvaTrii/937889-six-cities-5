import React from "react";
import renderer from "react-test-renderer";
import OfferImagesList from "./offer-images-list";

it(`Should OfferImagesList render properly`, () => {
  const pictures = [
    `#`, `#`, `#`, `#`,
  ];


  const tree = renderer
    .create(
        <OfferImagesList
          pictures={pictures}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
