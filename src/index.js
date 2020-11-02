import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import {createApi} from "./services/api/api";
import {fetchOffersList} from "./store/data/actions";
import {requireAuthorization, checkAuth} from "./store/user/actions";
import {AuthorizationStatus} from "./const";

import App from "./components/app/app.jsx";

import rootReducer from "./store/root-reducer";

const api = createApi(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ));

store.dispatch(fetchOffersList());
store.dispatch(checkAuth());
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
