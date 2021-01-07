import * as React from "react";
import * as renderer from "react-test-renderer";
import OfferReview from "./offer-review";
import {ReviewType} from "../../types";

it(`Should OfferReview render properly`, () => {
  const review: ReviewType = {
    id: 300,
    date: 1605357744252,
    userInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Tom`,
      id: 1,
      isSuper: false,
    },
    text: `Lorem ipsum dolor sit amet`,
    rating: 4
  };

  const tree = renderer
    .create(
        <OfferReview
          review={review}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
