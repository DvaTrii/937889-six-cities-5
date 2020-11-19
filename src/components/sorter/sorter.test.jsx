import React from "react";
import renderer from "react-test-renderer";
import {Sorter} from "./sorter";

it(`Should Sorter render properly`, () => {

  const noop = () => {};
  const activeSorter = `Popular`;
  const activeCity = `Paris`;

  const tree = renderer
    .create(
        <Sorter
          activeSorter={activeSorter}
          setActiveSorterAction={noop}
          activeCity={activeCity}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
