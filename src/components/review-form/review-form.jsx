import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {postReview} from "../../store/data/operations";
import {getAuthorizationStatus} from "../../store/user/selectors";
import {getOfferIdFromUrl} from "../../store/data/selectors";

class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: ``,
      review: ``,
      formIsValid: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  validateForm() {
    const isValid = this.state.rating && (this.state.review.length < 300 && this.state.review.length > 50);

    this.setState({
      formIsValid: isValid
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.postReview(this.state, this.props.id);
    this.setState({
      rating: ``,
      review: ``,
      formIsValid: false,
    });
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value}, this.validateForm);
  }

  render() {
    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this.handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="5"
            id="5-stars"
            type="radio"
            onChange={this.handleFieldChange}
            checked={this.state.rating === `5`}
          />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="4"
            id="4-stars"
            type="radio"
            onChange={this.handleFieldChange}
            checked={this.state.rating === `4`}
          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="3"
            id="3-stars"
            type="radio"
            onChange={this.handleFieldChange}
            checked={this.state.rating === `3`}
          />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="2"
            id="1-stars"
            type="radio"
            onChange={this.handleFieldChange}
            checked={this.state.rating === `2`}
          />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="1"
            id="1-stars"
            type="radio"
            onChange={this.handleFieldChange}
            checked={this.state.rating === `1`}
          />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={this.handleFieldChange}
          value={this.state.review}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe
            your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={!this.state.formIsValid}>
            Submit</button>
        </div>
      </form>

    );
  }
}

ReviewForm.propTypes = {
  postReview: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return ({
    id: getOfferIdFromUrl(ownProps),
    authorizationStatus: getAuthorizationStatus(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  postReview(data, id) {
    dispatch(postReview(data, id));
  }
});

export {ReviewForm};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ReviewForm);
