import React from "react";
import leaflet from "leaflet";

// import "leaflet/dist/leaflet.css";

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const zoom = 12;
    const offerCords = [52.3709553943508, 4.89309666406198];

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const myMap = leaflet.map(`myMap`, {
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
      .addTo(myMap);

    leaflet
      .marker(offerCords, {icon})
      .addTo(myMap);
  }

  render() {
    return (
      <div id="myMap"></div>
    );
  }
}
