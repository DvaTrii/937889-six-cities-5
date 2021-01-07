import * as React from "react";
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {FavoritesButton} from "./favorites-button";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should FavoritesButton be pressed`, () => {

  const classPrefix: string = `place-card`;
  const offerId: number = 23;
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
