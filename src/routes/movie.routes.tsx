// interface
import { routePropsType } from "@interfaces/routes.interface";
import React from "react";

// pages
const MovieDetails = React.lazy(
  () => import("@pages/Movies/MovieDetails/MovieDetails")
);
const Popular = React.lazy(() => import("@pages/Movies/Popular/Popular"));
const Search = React.lazy(() => import("@pages/Movies/Search/Search"));
const TopRated = React.lazy(() => import("@pages/Movies/TopRated/TopRated"));
const UpComing = React.lazy(() => import("@pages/Movies/UpComing/UpComing"));

// movie routes with elements
const movieRoutes: routePropsType[] = [
  {
    path: "popular",
    element: <Popular />,
  },
  {
    path: "upcoming",
    element: <UpComing />,
  },
  {
    path: "top-rated",
    element: <TopRated />,
  },
  {
    path: "search",
    element: <Search />,
  },
  {
    path: "details/:id",
    element: <MovieDetails />,
  },
];

export default movieRoutes;
