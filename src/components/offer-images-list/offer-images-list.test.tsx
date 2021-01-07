import * as React from "react";
import * as renderer from "react-test-renderer";
import OfferImagesList from "./offer-images-list";

it(`Should OfferImagesList render properly`, () => {
  const pictures: Array<string> = [
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
