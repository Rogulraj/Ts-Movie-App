import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PaginationIndex, SearchWithPagination } from "@models/index";

import {
  VITE_API_ACCESS_TOKEN,
  VITE_API_BASE_URL,
  VITE_API_KEY,
} from "@config/index";
import { MovieModel } from "@models/movie.model";
import { MovieDetailsModel, MovieId } from "@models/movieDetails.model";
import { url } from "inspector";
import { CreditsDetailModel } from "@models/cast.model";

export const MovieService = createApi({
  reducerPath: "movie-api",
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    // fetch popular movie
    fetchPopularMovies: builder.query<MovieModel, PaginationIndex>({
      query: ({ index }) => ({
        url: `/movie/popular?language=en-US&page=${index}&api_key=${VITE_API_KEY}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
        },
        method: "GET",
      }),
    }),

    // fetch upcoming movies
    fetchUpcomingMovies: builder.query<MovieModel, PaginationIndex>({
      query: ({ index }) => ({
        url: `/movie/upcoming?language=en-US&page=${index}&api_key=${VITE_API_KEY}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
        },
        method: "GET",
      }),
    }),

    // fetch top-rated movies
    fetchTopRatedMovies: builder.query<MovieModel, PaginationIndex>({
      query: ({ index }) => ({
        url: `/movie/top_rated?language=en-US&page=${index}&api_key=${VITE_API_KEY}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
        },
        method: "GET",
      }),
    }),

    // fetch movie details
    fetchMovieDetails: builder.query<MovieDetailsModel, MovieId>({
      query: ({ id }) => ({
        url: `/movie/${id}?language=en-US&api_key=${VITE_API_KEY}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
        },
        method: "GET",
      }),
    }),

    // fetch credits
    fetchCreditsDetails: builder.query<CreditsDetailModel, MovieId>({
      query: ({ id }) => ({
        url: `/movie/${id}/credits?language=en-US&api_key=${VITE_API_KEY}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
        },
        method: "GET",
      }),
    }),
  }),
});

export const {
  useFetchPopularMoviesQuery,
  useFetchUpcomingMoviesQuery,
  useFetchTopRatedMoviesQuery,
  useFetchMovieDetailsQuery,
  useFetchCreditsDetailsQuery,
} = MovieService;
