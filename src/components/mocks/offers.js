import {OfferType} from "../../const";

const offers = [
  {
    id: 101,
    pictures: [`img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`],
    isPremium: true,
    price: 100,
    title: `Beautiful & luxurious apartment at great location`,
    type: OfferType.APARTMENT,
    rating: 5,
    description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`,
    bedroomsMax: `4 Bedrooms`,
    guestsMax: `Max 5 adults`,
    amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Parking`, `Flowers`, `Dishwasher`, `Towels`, `TV`],
    hostInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Ross`,
      isSuper: true,
    }
  },
  {
    id: 102,
    pictures: [`img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`],
    isPremium: false,
    price: 80,
    title: `Beautiful & luxurious apartment at great location`,
    type: OfferType.HOTEL,
    rating: 4,
    description: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit`,
    bedroomsMax: `4 Bedrooms`,
    guestsMax: `Max 5 adults`,
    amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Dishwasher`, `Towels`, `TV`],
    hostInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Chandler`,
      isSuper: true,
    }
  },
  {
    id: 103,
    pictures: [`img/studio-01.jpg`, `img/studio-01.jpg`, `img/studio-01.jpg`, `img/studio-01.jpg`, `img/studio-01.jpg`, `img/studio-01.jpg`],
    isPremium: true,
    price: 120,
    title: `Beautiful & luxurious apartment at great location`,
    type: OfferType.HOUSE,
    rating: 3,
    description: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam`,
    bedroomsMax: `1 Bedroom`,
    guestsMax: `Max 2 adults`,
    amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Dishwasher`, `Towels`, `TV`],
    hostInfo: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Monica`,
      isSuper: false,
    }
  },
  {
    id: 104,
    pictures: [`img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`],
    isPremium: true,
    price: 100,
    title: `Beautiful & luxurious apartment at great location`,
    type: OfferType.ROOM,
    rating: 2,
    description: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti`,
    bedroomsMax: `2 Bedrooms`,
    guestsMax: `Max 3 adults`,
    amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Dishwasher`, `Towels`, `TV`],
    hostInfo: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Rachel`,
      isSuper: true,
    }
  }
];

export default offers;
