import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import routes from "./routes";

const HomePage = lazy(() =>
  import("./views/HomePage.jsx" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage.jsx" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage.jsx" /* webpackChunkName: "movie-details-page" */
  )
);

const App = () => (
  <>
    <AppBar />
    <main>
      <div className="container">
        <Suspense fallback={<h1>Загружается...</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.movie} component={MoviesPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </div>
    </main>
  </>
);

export default App;
