import * as React from "react";

type Props = {
  amenities: Array<string>
};

const OfferAmenitiesList: React.FC<Props> = ({amenities}) => {

  return (
    <ul className="property__inside-list">
      {amenities.map((name) => {
        return (
          <li key={name} className="property__inside-item">
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default OfferAmenitiesList;
