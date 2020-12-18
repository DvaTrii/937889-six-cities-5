import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import {createApi} from "./services/api/api";
import {fetchOffersList} from "./store/data/operations";
import {requireAuthorization} from "./store/user/actions";
import {checkAuth} from "./store/user/operations";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middleware/redirect";


import App from "./components/app/app";

import rootReducer from "./store/root-reducer";

const api = createApi(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    ));

store.dispatch(fetchOffersList());
store.dispatch(checkAuth());
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
