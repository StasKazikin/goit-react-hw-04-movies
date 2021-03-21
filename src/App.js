import { Route, NavLink, Switch } from "react-router-dom";
import HomePage from "./views/HomePage.jsx";
import MoviesPage from "./views/MoviesPage.jsx";
import MovieDetailsPage from "./views/MovieDetailsPage.jsx";

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      <Route component={HomePage} />
    </Switch>
  </>
);

export default App;
