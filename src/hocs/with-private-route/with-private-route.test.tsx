import React from "react";
import renderer from "react-test-renderer";
import {withPrivateRoute} from "./with-private-route";

const MockComponent = () => {

  return (
    <React.Fragment>
      <div></div>
    </React.Fragment>
  );
};
const authorizationStatus = true;

const MockComponentWrapped = withPrivateRoute(MockComponent, authorizationStatus);

it(`withPrivateRoute is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
