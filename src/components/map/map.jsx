import React, {createRef} from "react";
import PropTypes from "prop-types";

import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

import {ZOOM} from "../../const";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
  }

  _update() {
    const {offers} = this.props;

    const cityCoordinates = offers[0].city.coordinates;

    const zoom = ZOOM;
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(this._mapRef.current, {
      center: cityCoordinates,
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
      leaflet
        .marker([item.coordinates.latitude, item.coordinates.longitude], {icon})
        .addTo(this.map);
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
      <div ref={this._mapRef} style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
};
