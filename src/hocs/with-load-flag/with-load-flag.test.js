import React from "react";
import renderer from "react-test-renderer";
import {withLoadFlag} from "./with-load-flag.tsx";

const MockComponent = () => {

  return (
    <React.Fragment>
    </React.Fragment>
  );
};

const MockComponentWrapped = withLoadFlag(MockComponent);

it(`withLoadFlag is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped isLoad={true}/>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
