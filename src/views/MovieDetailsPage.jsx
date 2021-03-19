import React, { Component } from "react";
import axios from "axios";

class MovieDetailsPage extends Component {
  state = {
    poster_path: "",
    title: null,
    release_date: "",
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=350384d7e97366c3ad316856e31f1b7b&language=en-US`
    );

    this.setState({ ...response.data });
  }

  render() {
    const { poster_path, title, release_date, overview, genres } = this.state;
    const imgUrl = "http://image.tmdb.org/t/p/w500" + poster_path;

    return (
      <>
        <img src={imgUrl} alt={this.state.title} />
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres.map((genre) => (
          <span key={genre.name}>{genre.name} </span>
        ))}
      </>
    );
  }
}

export default MovieDetailsPage;
