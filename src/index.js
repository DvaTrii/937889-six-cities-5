import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";

import {reducer} from "./store/reducer";
import offers from "./mocks/offers.js";
import {reviews} from "./mocks/reviews";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>

      <App
        offers={offers}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
