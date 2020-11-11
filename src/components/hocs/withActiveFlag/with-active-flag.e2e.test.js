import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withActiveFlag} from "./withActiveFlag";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveFlag(MockComponent);

it(`Should isActive be false`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().isActive).toEqual(false);
});

