import * as React from "react";
import * as renderer from "react-test-renderer";
import {withPrivateRoute} from "./with-private-route";

const MockComponent: React.FC = () => {

  return (
    <React.Fragment>
      <div/>
    </React.Fragment>
  );
};
const authorizationStatus: boolean = true;

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
