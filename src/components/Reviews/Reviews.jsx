import React from "react";
import PropTypes from "prop-types";

const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews && reviews.results.length > 0 ? (
        reviews.results.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequirred,
      content: PropTypes.string.isRequirred,
    })
  ),
};

export default Reviews;
