import React from "react";
import renderer from "react-test-renderer";
import OfferReviewsList from "./offer-reviews-list.tsx";

it(`Should OfferReviewsList render properly`, () => {
  const reviews = [
    {
      id: 300,
      date: 1605357744252,
      userInfo: {
        avatar: `img/avatar-max.jpg`,
        name: `Tom`
      },
      text: `Lorem ipsum dolor sit et dolore magna aliqua. Ut enim ad minim veniam`,
      rating: 4
    },
    {
      id: 333,
      date: 1605357744253,
      userInfo: {
        avatar: `img/avatar-max.jpg`,
        name: `Bob`
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
