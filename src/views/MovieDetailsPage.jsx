import React, { Component } from "react";
import axios from "axios";
import { NavLink, Route } from "react-router-dom";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import routes from "../routes";

class MovieDetailsPage extends Component {
  state = {
    poster_path: "",
    title: null,
    release_date: "",
    overview: null,
    genres: [],
    credits: null,
    reviews: null,
  };

  async componentDidMount() {
    try {
      const { movieId } = this.props.match.params;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=350384d7e97366c3ad316856e31f1b7b&language=en-US&append_to_response=credits,reviews`
      );

      this.setState({ ...response.data });
    } catch (error) {
      console.error(error);
    }
  }
  handleGoBack = () => {
    const { location, history } = this.props;

    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }
    // history.push(routes.movies);

    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
      credits,
      reviews,
    } = this.state;
    const imgUrl = `http://image.tmdb.org/t/p/w300${poster_path}`;
    const { url, path } = this.props.match;
    const usrScore = Number(vote_average) * 10;

    return (
      <>
        <button type="button" onClick={this.handleGoBack} className="goBackBtn">
          Go back
        </button>
        <div className="thumb">
          <img src={imgUrl} alt={title} className="poster" />
          <div>
            <h2>
              {title} ({release_date.slice(0, 4)})
            </h2>
            <p>
              User Score: <span>{usrScore}%</span>
            </p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres.map((genre) => (
              <span key={genre.name}>{genre.name} </span>
            ))}
          </div>
        </div>

        <h3 className="additionalInfoWrap">Additional information</h3>
        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Route
          path={`${path}/cast`}
          render={() => <Cast credits={credits} />}
        />
        <Route
          path={`${path}/reviews`}
          render={() => <Reviews reviews={reviews} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
