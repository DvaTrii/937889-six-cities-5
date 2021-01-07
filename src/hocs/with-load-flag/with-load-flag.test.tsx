import * as React from "react";
import * as renderer from "react-test-renderer";
import {withLoadFlag} from "./with-load-flag";

const MockComponent: React.FC = () => {

  return (
    <div />
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
