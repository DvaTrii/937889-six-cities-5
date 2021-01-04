export type OfferCardType = {
  id: number,
  city: {
    name: string,
    coordinates: {
      latitude: number,
      longitude: number,
      zoom: number
    }
  },
  coordinates: {
    latitude: number,
    longitude: number,
    zoom: number
  },
  pictures: Array<string>,
  previewImage: string,
  isPremium?: boolean,
  isBookmark?: boolean,
  price: number,
  title: string,
  type: string,
  rating: number,
  description: string,
  bedroomsMax: number,
  guestsMax: number,
  amenities: Array<string> | null,
  hostInfo: {
    avatar: string,
    name: string,
    isSuper?: boolean,
  }
};

export enum Cities {
  PARIS = `Paris`,
  COLOGNE = `Cologne`,
  BRUSSELS = `Brussels`,
  AMSTERDAM = `Amsterdam`,
  HAMBURG = `Hamburg`,
  DUSSELDORF = `Dusseldorf`,
}

export type ReviewType = {
  id: number,
  date: number,
  text: string,
  rating: number,
  userInfo: {
    avatar: string,
    name: string,
    id: number,
    isSuper: boolean,
  }
};
