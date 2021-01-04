import * as React from "react";

type Props = {
  pictures: Array<string>
}

const OfferImagesList: React.FC<Props> = ({pictures}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">

        {pictures.map((src, index) => {
          return (
            <div key={src + index} className="property__image-wrapper">
              <img className="property__image" src={src} alt="Photo studio"></img>
            </div>);
        })}

      </div>
    </div>
  );
};

export default OfferImagesList;
