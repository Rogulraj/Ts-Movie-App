//types
interface RoutePathsType {
  popularMovies: string;
  topRatedMovies: string;
  upcomingMovies: string;
  searchMovies: string;
  movieDetails: string;
}

//route paths
const routePaths: RoutePathsType = {
  popularMovies: "/movie/popular",
  topRatedMovies: "/movie/top-rated",
  upcomingMovies: "/movie/upcoming",
  searchMovies: "/movie/search",
  movieDetails: "/movie/details",
};

export default routePaths;
