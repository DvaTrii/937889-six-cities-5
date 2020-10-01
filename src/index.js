import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Offers = {
  TOTAL_OFFERS: 322,
};

ReactDOM.render(
    <App
      totalOffers={Offers.TOTAL_OFFERS}
    />,
    document.querySelector(`#root`)
);
