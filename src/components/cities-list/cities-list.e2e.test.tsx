import * as React from "react";
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {CitiesList} from "./cities-list";
import {Cities} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should city button be pressed`, () => {
  const setCurrentCityAction = jest.fn();

  const wrapper = shallow(
      <CitiesList
        cities={Object.values(Cities)}
        city={Object.values<string>(Cities)[0]}
        setCurrentCityAction={setCurrentCityAction}
      />
  );

  const cityElements = wrapper.find(`.locations__item`);
  cityElements.forEach((it) => it.simulate(`click`));
  expect(setCurrentCityAction).toHaveBeenCalledTimes(6);
});

