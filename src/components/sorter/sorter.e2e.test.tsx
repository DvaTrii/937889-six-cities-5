import * as React from "react";
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Sorter} from "./sorter";
import {SorterType} from "../../const";
import {Cities} from "../../types";

Enzyme.configure({
  adapter: new Adapter(),
});

const activeCity: Cities = Cities.PARIS;

it(`Should Sorter be set active`, () => {

  const setActiveSorterAction = jest.fn();

  const wrapper = shallow(
      <Sorter
        activeSorter={SorterType.POPULAR}
        setActiveSorterAction={setActiveSorterAction}
        activeCity={activeCity}
      />
  );

  const element = wrapper.find(`.places__sorting-type`);
  element.simulate(`click`);
  expect(wrapper.find(`.places__options--opened`).length).toEqual(1);
});

it(`Should Sorter be set active`, () => {

  const setActiveSorterAction = jest.fn();

  const wrapper = shallow(
      <Sorter
        activeSorter={SorterType.POPULAR}
        setActiveSorterAction={setActiveSorterAction}
        activeCity={activeCity}
      />
  );

  const element = wrapper.find(`.places__sorting-type`);
  element.simulate(`click`);
  expect(wrapper.find(`.places__options--opened`).length).toEqual(1);
});

it(`Should Sorter type be pressed`, () => {

  const setActiveSorterAction = jest.fn();

  const wrapper = shallow(
      <Sorter
        activeSorter={SorterType.POPULAR}
        setActiveSorterAction={setActiveSorterAction}
        activeCity={activeCity}
      />
  );

  const elements = wrapper.find(`.places__option`);
  elements.forEach((it) => it.simulate(`click`));
  expect(setActiveSorterAction).toHaveBeenCalledTimes(4);
});
