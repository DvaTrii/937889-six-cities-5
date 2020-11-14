import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoritesButton} from "./favorites-button";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should FavoritesButton be pressed`, () => {

  const classPrefix = `place-card`;
  const offerId = 23;
  const toggleIsBookmarkProperty = jest.fn();

  const wrapper = shallow(
      <FavoritesButton
        classPrefix={classPrefix}
        offerId={offerId}
        toggleIsBookmarkProperty={toggleIsBookmarkProperty}
      />
  );

  const cityElements = wrapper.find(`.button`);
  cityElements.simulate(`click`);
  expect(toggleIsBookmarkProperty).toHaveBeenCalledTimes(1);
});
