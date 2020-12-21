import * as React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {SorterType, SorterActiveClass, SorterListOpenedClass} from "../../const";
import {getActiveSorter, getActiveCity} from "../../store/app/selectors";
import {setActiveSorter} from "../../store/app/actions";


const Sorter = ({activeSorter, setActiveSorterAction, activeCity}) => {

  const [isActive, setIsActive] = React.useState(false);
  const toggleIsActive = () => setIsActive(!isActive);

  React.useEffect(() => {
    setIsActive(false);
  }, [activeCity]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"
        tabIndex="0"
        onClick={toggleIsActive}>
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
                toggleIsActive();
              }}
              tabIndex="0">
              {it}
            </li>))
        }

      </ul>
    </form>
  );
};

Sorter.propTypes = {
  activeSorter: PropTypes.string.isRequired,
  setActiveSorterAction: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return ({
    activeSorter: getActiveSorter(state),
    activeCity: getActiveCity(state)
  });
};

const mapDispatchToProps = (dispatch) => ({
  setActiveSorterAction(sorter) {
    dispatch(setActiveSorter(sorter));
  }
});

export {Sorter};
export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
