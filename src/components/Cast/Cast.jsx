import React from "react";
import PropTypes from "prop-types";

const Cast = ({ credits }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w200";

  return (
    <>
      {credits && (
        <ul>
          {credits.cast &&
            credits.cast.map((actor) => (
              <li key={actor.id}>
                <img
                  src={`${imgUrl}${actor.profile_path}`}
                  alt={actor.name}
                  width="100"
                />
                <h3>{actor.name}</h3>
                <p>{actor.character}</p>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

Cast.propTypes = {
  credits: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequirred,
        character: PropTypes.string,
      })
    )
  ),
};

export default Cast;
