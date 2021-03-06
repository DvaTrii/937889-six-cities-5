import * as React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import * as leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

import {getActiveCity, getHoveredOfferId} from "../../store/app/selectors";
import {getOfferById} from "../../store/data/selectors";
import {withLoadFlag} from "../../hocs/with-load-flag/with-load-flag";
import {OfferCardType} from "../../types";

type Props = {
  offers: Array<OfferCardType>,
  hoveredOfferId?: number,
  isMainPageMap?: boolean,
  offerById?: OfferCardType,
  activeCity?: string,
  isLoaded?: boolean
};

const Map: React.FC<Props>= ({offers, isMainPageMap = true, offerById = {}, hoveredOfferId, activeCity}) => {

  const mapRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {

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

    const map = leaflet.map(mapRef.current, {
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
      .addTo(map);

    if (!isMainPageMap) {
      leaflet
        .marker([offerById.coordinates.latitude, offerById.coordinates.longitude], {icon: hoveredIcon})
        .addTo(map);

      offers.forEach((item) => {
        leaflet
          .marker([item.coordinates.latitude, item.coordinates.longitude], {icon})
          .addTo(map);
      });
    } else {
      offers.forEach((item) => {
        if (item.id === hoveredOfferId) {
          leaflet
            .marker([item.coordinates.latitude, item.coordinates.longitude], {icon: hoveredIcon})
            .addTo(map);
        } else {
          leaflet
            .marker([item.coordinates.latitude, item.coordinates.longitude], {icon})
            .addTo(map);
        }
      });
    }

    return () => map.remove();

  }, [hoveredOfferId, activeCity]);

  return (
    <div ref={mapRef} style={{height: `100%`}}/>
  );
};

const mapStateToProps = (state) => ({
  hoveredOfferId: getHoveredOfferId(state),
  offerById: getOfferById(state),
  activeCity: getActiveCity(state),
});

export {Map};
export default compose<React.FC<Props>>(withLoadFlag, connect(mapStateToProps))(Map);
