import React from "react";
import renderer from "react-test-renderer";
import {Sorter} from "./sorter";

it(`Should Sorter render properly`, () => {

  const noop = () => {};
  const activeSorter = `Popular`;

  const tree = renderer
    .create(
        <Sorter
          activeSorter={activeSorter}
          setActiveSorterAction={noop}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
