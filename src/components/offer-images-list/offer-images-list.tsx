import * as React from "react";

const OfferImagesList = ({pictures}) => {
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

// OfferImagesList.propTypes = {
//   pictures: PropTypes.arrayOf(PropTypes.string).isRequired
// };

export default OfferImagesList;
