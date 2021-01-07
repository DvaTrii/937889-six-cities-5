import * as React from "react";
import * as renderer from "react-test-renderer";
import OfferReviewsList from "./offer-reviews-list";
import {ReviewType} from "../../types";

it(`Should OfferReviewsList render properly`, () => {
  const reviews: Array<ReviewType> = [
    {
      id: 300,
      date: 1605357744252,
      userInfo: {
        avatar: `img/avatar-max.jpg`,
        name: `Tom`,
        id: 1,
        isSuper: false,
      },
      text: `Lorem ipsum dolor sit et dolore magna aliqua. Ut enim ad minim veniam`,
      rating: 4
    },
    {
      id: 333,
      date: 1605357744253,
      userInfo: {
        avatar: `img/avatar-max.jpg`,
        name: `Bob`,
        id: 1,
        isSuper: false,
      },
      text: `Lorem ipsum dolor sir incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
      rating: 3
    },
  ];

  const tree = renderer
    .create(
        <OfferReviewsList
          reviews={reviews}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
