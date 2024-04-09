import { configureStore } from "@reduxjs/toolkit";
import { MovieService } from "@services/movie.service";
import { MovieFeatureReducer } from "./features/movie.feature";
import { TypedUseSelectorHook } from "react-redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const reduxStore = configureStore({
  reducer: {
    movieFeature: MovieFeatureReducer,
    [MovieService.reducerPath]: MovieService.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(MovieService.middleware);
  },
});

export default reduxStore;

export const useAppDispatch: () => typeof reduxStore.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof reduxStore.getState>
> = useSelector;
