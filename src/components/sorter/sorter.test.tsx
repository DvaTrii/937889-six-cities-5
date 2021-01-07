import * as React from "react";
import * as renderer from "react-test-renderer";
import {Sorter} from "./sorter";
import {noop} from "../../utils";
import {Cities} from "../../types";
import {SorterType} from "../../const";

it(`Should Sorter render properly`, () => {

  const activeSorter: string = SorterType.Popular;
  const activeCity: Cities = Cities.PARIS;

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
