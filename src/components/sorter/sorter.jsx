import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {withActiveFlag} from "../hocs/withActiveFlag/withActiveFlag";
import {SorterType, SorterActiveClass, SorterListOpenedClass} from "../../const";
import {ActionCreator} from "../../store/action";


const Sorter = ({isActive, onActiveChange, activeSorter, setActiveSorter}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"
        tabIndex="0"
        onClick={onActiveChange}>
        {activeSorter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom
        ${isActive ?
      SorterListOpenedClass.OPENED : ``}`}>

        {
          Object.values(SorterType).map((it) => (
            <li key={it}
              className={`places__option ${activeSorter === it ? SorterActiveClass.ACTIVE : ``}`}
              onClick={() => {
                setActiveSorter(it);
                onActiveChange();
              }}
              tabIndex="0">
              {it}
            </li>))
        }

      </ul>
      {/* <select className="places__sorting-type" id="places-sorting">*/}
      {/*  <option className="places__option" value="popular" selected="">Popular</option>*/}
      {/*  <option className="places__option" value="to-high">Price: low to high</option>*/}
      {/*  <option className="places__option" value="to-low">Price: high to low</option>*/}
      {/*  <option className="places__option" value="top-rated">Top rated first</option>*/}
      {/* </select>*/}
    </form>
  );
};

Sorter.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  activeSorter: PropTypes.string.isRequired,
  setActiveSorter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return ({
    activeSorter: state.activeSorter,
  });
};

const mapDispatchToProps = (dispatch) => ({
  setActiveSorter(sorter) {
    dispatch(ActionCreator.setActiveSorter(sorter));
  }
});

export {Sorter};
export default withActiveFlag(connect(mapStateToProps, mapDispatchToProps)(Sorter));
