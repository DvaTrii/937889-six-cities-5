import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";

it(`Should ReviewForm render properly`, () => {
  const offerId = 3;

  const tree = renderer
    .create(
        <ReviewForm
          postReview={() => {}}
          offerId={offerId}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
