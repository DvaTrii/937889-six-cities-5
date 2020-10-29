import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import {createApi} from "./services/api/api";
import {fetchOffersList} from "./store/api-actions";

import App from "./components/app/app.jsx";

import rootReducer from "./store/root-reducer";
import {reviews} from "./mocks/reviews";

const api = createApi();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ));

store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store={store}>

      <App
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
