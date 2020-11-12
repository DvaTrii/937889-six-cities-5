import React from "react";
import renderer from "react-test-renderer";
import {Sorter} from "./sorter";

describe(`<Sorter> render`, () => {
  it(`Should Sorter with activeFlag = true render properly`, () => {
    const isActive = true;
    const noop = () => {};
    const activeSorter = `Popular`;

    const tree = renderer
      .create(
          <Sorter
            isActive={isActive}
            onActiveChange={noop}
            activeSorter={activeSorter}
            setActiveSorterAction={noop}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`Should Sorter with activeFlag = false render properly`, () => {
    const isActive = false;
    const noop = () => {};
    const activeSorter = `Popular`;

    const tree = renderer
      .create(
          <Sorter
            isActive={isActive}
            onActiveChange={noop}
            activeSorter={activeSorter}
            setActiveSorterAction={noop}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
