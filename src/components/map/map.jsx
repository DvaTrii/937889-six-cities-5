import React, {createRef} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import PropTypes from "prop-types";

import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

import {getHoveredOfferId} from "../../store/app/selectors";
import {getOfferById} from "../../store/data/selectors";
import {withLoadFlag} from "../hocs/with-load-flag/with-load-flag";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
  }

  _update() {
    const {offers, isMainPageMap, offerById} = this.props;

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const hoveredIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30]
    });

    const city = offers[0].city.coordinates;
    const coordinates = isMainPageMap ?
      [city.latitude, city.longitude] :
      [offerById.coordinates.latitude, offerById.coordinates.longitude];

    const zoom = isMainPageMap ?
      offers[0].city.coordinates.zoom
      : offerById.coordinates.zoom;

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

    if (!isMainPageMap) {
      leaflet
        .marker([offerById.coordinates.latitude, offerById.coordinates.longitude], {icon: hoveredIcon})
        .addTo(this.map);

      offers.forEach((item) => {
        leaflet
          .marker([item.coordinates.latitude, item.coordinates.longitude], {icon})
          .addTo(this.map);
      });
    } else {
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

Map.defaultProps = {
  offerById: {},
  isMainPageMap: true
};

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  hoveredOfferId: PropTypes.number.isRequired,
  isMainPageMap: PropTypes.bool.isRequired,
  offerById: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  hoveredOfferId: getHoveredOfferId(state),
  offerById: getOfferById(state)
});

export {Map};
export default compose(withLoadFlag, connect(mapStateToProps))(Map);
