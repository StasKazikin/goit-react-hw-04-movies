import React from "react";

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

export default Cast;
