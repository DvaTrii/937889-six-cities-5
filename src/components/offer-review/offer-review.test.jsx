import React from "react";
import renderer from "react-test-renderer";
import OfferReview from "./offer-review";

it(`Should OfferReview render properly`, () => {
  const review = {
    id: 300,
    date: 1605357744252,
    userInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Tom`
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
