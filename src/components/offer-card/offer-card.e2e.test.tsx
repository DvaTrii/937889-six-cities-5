import * as React from "react";
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {CardClass} from "../../const";
import {OfferCardType} from "../../types";
import {noop} from "../../utils";

Enzyme.configure({
  adapter: new Adapter(),
});

const card: OfferCardType = {
  id: 101,
  city: {
    name: `Amsterdam`,
    coordinates: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 12
    }
  },
  coordinates: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 12
  },
  previewImage: `img/apartment-02.jpg`,
  pictures: [`img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`],
  isPremium: true,
  isBookmark: true,
  price: 100,
  title: `Wood and stone place`,
  type: `Apartment`,
  rating: 5,
  description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`,
  bedroomsMax: 4,
  guestsMax: 5,
  amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Parking`, `Flowers`, `Dishwasher`, `Towels`, `TV`],
  hostInfo: {
    avatar: `img/avatar-max.jpg`,
    name: `Ross`,
    isSuper: true,
  },
};

describe(`Should OfferCard mouse events be simulated`, () => {
  it(`Should OfferCard mouse enter event to be set`, () => {
    const setHoveredOfferIdAction = jest.fn();

    const wrapper = shallow(
        <OfferCard
          card={card}
          setHoveredOfferIdAction={setHoveredOfferIdAction}
          resetHoveredOfferIdAction={noop}
          cardClass={CardClass.MAIN}
        />
    );

    const element = wrapper.find(`.place-card`);
    element.simulate(`mouseEnter`);
    expect(setHoveredOfferIdAction).toHaveBeenCalledTimes(1);
  });

  it(`Should OfferCard mouse leave event to be set`, () => {
    const resetHoveredOfferIdAction = jest.fn();

    const wrapper = shallow(
        <OfferCard
          card={card}
          setHoveredOfferIdAction={noop}
          resetHoveredOfferIdAction={resetHoveredOfferIdAction}
          cardClass={CardClass.MAIN}
        />
    );

    const element = wrapper.find(`.place-card`);
    element.simulate(`mouseLeave`);
    expect(resetHoveredOfferIdAction).toHaveBeenCalledTimes(1);
  });
});
