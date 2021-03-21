import { Component } from "react";
import axios from "axios";
import MoviesList from "../components/MoviesList/MoviesList";

class MoviesPage extends Component {
  state = {
    inputValue: "",
    movies: [],
  };

  handleSearchMovie = (searchQuery) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=350384d7e97366c3ad316856e31f1b7b&query=${searchQuery}`
      )
      .then(({ data }) => this.setState({ movies: data.results }));
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.handleSearchMovie(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
