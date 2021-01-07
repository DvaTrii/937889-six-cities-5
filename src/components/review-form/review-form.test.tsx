import * as React from "react";
import * as renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";
import {noop} from "../../utils";

it(`Should ReviewForm render properly`, () => {
  const offerId: number = 3;

  const tree = renderer
    .create(
        <ReviewForm
          postCurrentReview={noop}
          offerId={offerId}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
