import MockAdapter from "axios-mock-adapter";
import {createApi} from "../../services/api/api";
import {ActionType} from "./actions";

import {
  fetchOffersList,
  fetchOfferById,
  fetchReviewsList,
  fetchNearOffersById,
  postReview,
  postOfferToFavorite
} from "./operations";
import {adaptOffer, adaptReview} from "../../utils";

const api = createApi(() => {});

const offers = [
  {
    "city": {
      "name": `Cologne`,
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    ],
    "title": `The house among olive `,
    "is_favorite": false,
    "is_premium": false,
    "rating": 3.8,
    "type": `house`,
    "bedrooms": 3,
    "max_adults": 4,
    "price": 493,
    "goods": [
      `Laptop friendly workspace`,
      `Washer`,
      `Towels`,
      `Fridge`,
      `Air conditioning`,
      `Baby seat`,
      `Breakfast`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    "location": {
      "latitude": 50.957361,
      "longitude": 6.9509739999999995,
      "zoom": 16
    },
    "id": 1
  }
];
const parsedOffers = offers.map((it) => adaptOffer(it));

const reviews = [{
  "id": 1,
  "user": {
    "id": 16,
    "is_pro": true,
    "name": `Mollie`,
    "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`
  },
  "rating": 4,
  "comment": `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
  "date": `2020-11-05T13:38:44.753Z`
}];
const reviewToPost = {
  comment: `add comment`,
  rating: 5
};
const reviewsRespondOnPost = [{
  "id": 1,
  "user": {
    "id": 16,
    "is_pro": true,
    "name": `Mollie`,
    "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`
  },
  "rating": 5,
  "comment": `add comment`,
  "date": `2020-11-05T13:38:44.753Z`,
}];
const parseReviews = (data) => data.map((it) => adaptReview(it));


describe(`Async operations /data work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loader = fetchOffersList();

    apiMock
      .onGet(`/hotels`)
      .reply(200, offers);

    return loader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: parsedOffers,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_LOAD_FLAG_OFFERS,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call to /hotels/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loader = fetchOfferById(id);

    apiMock
      .onGet(`/hotels/${id}`)
      .reply(200, offers[0]);

    return loader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_BY_ID,
          payload: parsedOffers[0],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_LOAD_FLAG_OFFER,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loader = fetchReviewsList(id);

    apiMock
      .onGet(`/comments/${id}`)
      .reply(200, reviews);

    return loader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: parseReviews(reviews),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_LOAD_FLAG_REVIEWS,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call to /hotels/id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loader = fetchNearOffersById(id);

    apiMock
      .onGet(`/hotels/${id}/nearby`)
      .reply(200, offers);

    return loader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEAR_OFFERS_BY_ID,
          payload: parsedOffers,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_LOAD_FLAG_NEAR_OFFERS,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call (post) to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;

    const loader = postReview(reviewToPost, id);

    apiMock
      .onPost(`/comments/${id}`)
      .reply(200, reviewsRespondOnPost);

    return loader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_REVIEW,
          payload: parseReviews(reviewsRespondOnPost),
        });
      });
  });

  it(`Should make a correct API call (post) to /favorite/id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 1;

    const loader = postOfferToFavorite(1, 1);

    apiMock
      .onPost(`/favorite/${id}/${status}`)
      .reply(200, offers[0]);

    return loader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.TOGGLE_OFFER_IS_BOOKMARK,
          payload: parsedOffers[0]
        });
      });
  });
});
