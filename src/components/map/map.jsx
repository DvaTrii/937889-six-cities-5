import React, {createRef} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import {ZOOM, CitiesCoordinates} from "../../const";

import "leaflet/dist/leaflet.css";

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
  }

  componentDidMount() {
    const city = CitiesCoordinates.Amsterdam;
    const zoom = ZOOM;

    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(this._mapRef.current, {
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

    offers.forEach((item) => {
      leaflet
        .marker([item.coordinates.latitude, item.coordinates.longitude], {icon})
        .addTo(this.map);
    });
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
