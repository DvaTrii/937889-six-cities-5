import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {SorterType, SorterActiveClass, SorterListOpenedClass} from "../../const";
import {ActionCreator} from "../../store/action";

class Sorter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setActiveSorter = this.props.setActiveSorter;

    this.state = {
      isOpened: false,
    };

    this._handleClick = this._handleClick.bind(this);
    this.setActiveSorter = this.setActiveSorter.bind(this);
  }

  _handleClick() {
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  render() {
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type"
          tabIndex="0"
          onClick={this._handleClick}>
          {this.props.activeSorter}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom
        ${this.state.isOpened ? SorterListOpenedClass.OPENED : ``}`}>
          {
            Object.values(SorterType).map((it) => (
              <li key={it}
                className={`places__option ${this.props.activeSorter === it ? SorterActiveClass.ACTIVE : ``}`}
                onClick={() => {
                  this.setActiveSorter(it);
                  this._handleClick();
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
  }
}

Sorter.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
