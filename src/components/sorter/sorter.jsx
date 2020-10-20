import React from "react";
import {SorterType, SorterActiveClass, SorterListOpenedClass} from "../../const";

export default class Sorter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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
          onClick={this.handleClick}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom
        ${this.state.isOpened ? SorterListOpenedClass.OPENED : ``}`}>
          {
            Object.values(SorterType).map((it) => (
              <li key={it} className={`places__option`}
                tabIndex="0">{it}</li>))
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

