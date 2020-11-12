import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Sorter} from "./sorter";
import {SorterType} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should Sorter be set active`, () => {

  const onActiveChange = jest.fn();
  const setActiveSorterAction = jest.fn();

  const wrapper = shallow(
      <Sorter
        isActive={false}
        onActiveChange={onActiveChange}
        activeSorter={SorterType.POPULAR}
        setActiveSorterAction={setActiveSorterAction}
      />
  );

  const element = wrapper.find(`.places__sorting-type`);
  element.simulate(`click`);
  expect(onActiveChange).toHaveBeenCalledTimes(1);
});

it(`Should Sorter type be pressed`, () => {

  const onActiveChange = jest.fn();
  const setActiveSorterAction = jest.fn();

  const wrapper = shallow(
      <Sorter
        isActive={true}
        onActiveChange={onActiveChange}
        activeSorter={SorterType.POPULAR}
        setActiveSorterAction={setActiveSorterAction}
      />
  );

  const elements = wrapper.find(`.places__option`);
  elements.forEach((it) => it.simulate(`click`));
  expect(setActiveSorterAction).toHaveBeenCalledTimes(4);
});
