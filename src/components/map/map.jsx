import React from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import {ZOOM, CitiesCoordinates} from "../../const";

import "leaflet/dist/leaflet.css";

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.pins = props.offers;

    this.map = null;
  }

  componentDidMount() {
    const city = CitiesCoordinates.Amsterdam;
    const zoom = ZOOM;

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(`map`, {
      center: city,
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

    this.pins.forEach((item) => {
      leaflet
        .marker([item.coordinates.latitude, item.coordinates.longitude], {icon})
        .addTo(this.map);
    });
  }

  componentWillUnmount() {
    this.map = null;
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
};
