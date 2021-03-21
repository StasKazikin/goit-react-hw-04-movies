import { Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage.jsx";
import MoviesPage from "./views/MoviesPage.jsx";
import MovieDetailsPage from "./views/MovieDetailsPage.jsx";
import AppBar from "./components/AppBar";
import routes from "./routes";

const App = () => (
  <>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      <Route path={routes.movie} component={MoviesPage} />
      <Route component={HomePage} />
    </Switch>
  </>
);

export default App;
