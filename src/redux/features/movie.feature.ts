import { MovieModel } from "@models/movie.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MovieState {
  movieData: MovieModel;
  currentPageIndex: number;
  searchValue: string;
}

const movieState: MovieState = {
  movieData: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  currentPageIndex: 1,
  searchValue: "",
};

const MovieFeature = createSlice({
  name: "movie-feature",
  initialState: movieState,
  reducers: {
    bulkEditMovieList: (state, action: PayloadAction<MovieModel>) => {
      state.movieData = action.payload;
    },
    incrementCurrentPage: (state) => {
      state.currentPageIndex += 1;
    },
    decrementCurrentPage: (state) => {
      state.currentPageIndex -= 1;
    },
    updateSearchValues: (state, action: PayloadAction<{ value: string }>) => {
      state.searchValue = action.payload.value;
    },
  },
});

export const MovieFeatureActions = MovieFeature.actions;
export const MovieFeatureReducer = MovieFeature.reducer;
