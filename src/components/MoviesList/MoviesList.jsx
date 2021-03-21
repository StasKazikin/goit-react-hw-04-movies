import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `movies/${movie.id}`,
              state: { from: location },
            }}
          >
            {movie.title}
            {movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequirred,
      name: PropTypes.string.isRequirred,
      // location: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesList);
