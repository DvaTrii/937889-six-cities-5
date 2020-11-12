import React from "react";
import renderer from "react-test-renderer";
import {withActiveFlag} from "./withActiveFlag";

const noop = () => {};

const MockComponent = () => {

  return (
    <React.Fragment>
      <div></div>
    </React.Fragment>
  );
};

const MockComponentWrapped = withActiveFlag(MockComponent);

it(`withActiveFlag is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isActive={false}
      onActiveChange={noop}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
