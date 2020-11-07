import React, {createRef} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import PropTypes from "prop-types";

import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

import {ZOOM} from "../../const";
import {getHoveredOfferId} from "../../store/app/selectors";
import {withLoadFlag} from "../hocs/withLoadFlag/with-load-flag";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
  }

  _update() {
    const {offers} = this.props;

    const city = offers[0].city.coordinates;
    const coordinates = [city.latitude, city.longitude];

    const zoom = ZOOM;

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const hoveredIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(this._mapRef.current, {
      center: coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          })
      .addTo(this.map);

    offers.forEach((item) => {
      if (item.id === this.props.hoveredOfferId) {
        leaflet
          .marker([item.coordinates.latitude, item.coordinates.longitude], {icon: hoveredIcon})
          .addTo(this.map);
      } else {
        leaflet
          .marker([item.coordinates.latitude, item.coordinates.longitude], {icon})
          .addTo(this.map);
      }
    });
  }

  componentDidMount() {
    this._update();
  }

  componentDidUpdate() {
    this.map.remove();
    this._update();
  }

  render() {
    return (
      <div ref={this._mapRef} style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  hoveredOfferId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  hoveredOfferId: getHoveredOfferId(state),
});

export {Map};
export default compose(withLoadFlag, connect(mapStateToProps))(Map);
