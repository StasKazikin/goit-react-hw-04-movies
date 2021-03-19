import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=350384d7e97366c3ad316856e31f1b7b"
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>

        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title}
                {movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
