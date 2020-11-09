import React from "react";
import renderer from "react-test-renderer";
import OfferReviewsList from "./offer-reviews-list";

it(`Should OfferReviewsList render properly`, () => {
  const reviews = [
    {
      id: 300,
      date: `April 2019`,
      userInfo: {
        avatar: `img/avatar-max.jpg`,
        name: `Tom`
      },
      text: `Lorem ipsum dolor sit et dolore magna aliqua. Ut enim ad minim veniam`,
      rating: 4
    },
    {
      id: 333,
      reviewDate: `March 2020`,
      userInfo: {
        avatar: `img/avatar-max.jpg`,
        name: `Bob`
      },
      text: `Lorem ipsum dolor sir incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
      rating: 3
    },
    {
      id: 344,
      reviewDate: `May 2021`,
      userInfo: {
        avatar: `img/avatar-angelina.jpg`,
        name: `Jess`
      },
      text: `Lorem eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
      rating: 2
    },
    {
      id: 455,
      reviewDate: `June 2022`,
      userInfo: {
        avatar: `img/avatar-angelina.jpg`,
        name: `Mary`
      },
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
      rating: 5
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
