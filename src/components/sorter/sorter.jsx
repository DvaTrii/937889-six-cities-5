import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import PropTypes from "prop-types";

import {withActiveFlag} from "../hocs/withActiveFlag/withActiveFlag";
import {SorterType, SorterActiveClass, SorterListOpenedClass} from "../../const";
import {setActiveSorter} from "../../store/app/actions";


const Sorter = ({isActive, onActiveChange, activeSorter, setActiveSorterAction}) => {
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
                setActiveSorterAction(it);
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
  setActiveSorterAction: PropTypes.func.isRequired
};

const mapStateToProps = ({APP}) => {
  return ({
    activeSorter: APP.activeSorter,
  });
};

const mapDispatchToProps = (dispatch) => ({
  setActiveSorterAction(sorter) {
    dispatch(setActiveSorter(sorter));
  }
});

export {Sorter};
export default compose(withActiveFlag, connect(mapStateToProps, mapDispatchToProps))(Sorter);
