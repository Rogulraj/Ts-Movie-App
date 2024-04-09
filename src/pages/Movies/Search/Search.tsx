import React, { useCallback, useEffect } from "react";
import CustomHelmet from "@components/Elements/CustomHelmet/CustomHelmet";
import PrimaryHeader from "@components/Headers/PrimaryHeader/PrimaryHeader";
import MaxWidthLayout from "@components/Layout/MaxWidthLayout/MaxWidthLayout";

import defaultStyle from "./Search.module.css";
import { MovieFeatureActions } from "@redux/features/movie.feature";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/store";
import MovieCard from "@components/Card/MovieCard/MovieCard";
import routePaths from "@constants/routePaths";
import Pagination from "@components/Card/Pagination/Pagination";
import { fetchSearchMovies } from "@services/search.service";
import { MovieModel } from "@models/movie.model";

const Search = () => {
  const dispatch = useAppDispatch();
  const { movieData, currentPageIndex, searchValue } = useAppSelector(
    (state) => state.movieFeature
  );

  const navigate = useNavigate();

  const searchHandler = useCallback(async (): Promise<void> => {
    if (currentPageIndex >= 1 && searchValue !== "") {
      const fetchData = await fetchSearchMovies({
        index: currentPageIndex,
        search: searchValue,
      });

      if (fetchData.statusCode === 200) {
        dispatch(
          MovieFeatureActions.bulkEditMovieList(fetchData.data as MovieModel)
        );
      }
    }
  }, [currentPageIndex, searchValue]);

  useEffect(() => {
    searchHandler();
  }, [currentPageIndex, searchValue]);

  return (
    <div className={defaultStyle.main_layout}>
      <CustomHelmet title="Search Movies" />
      <PrimaryHeader />
      <MaxWidthLayout>
        <>
          {movieData.results.length > 0 ? (
            <ul className={defaultStyle.movie_list_card}>
              {movieData.results?.map((item, _index) => (
                <li
                  key={_index}
                  onClick={() =>
                    navigate(`${routePaths.movieDetails}/${item.id}`)
                  }>
                  <MovieCard
                    imageUrl={item.poster_path}
                    movieId={item.id}
                    rating={item.vote_average.toFixed(2)}
                    title={item.title}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className={defaultStyle.data_not_found_card}>
              <h2 className={defaultStyle.data_not_found_text}>
                Data Not Found!
              </h2>
            </div>
          )}
          {movieData.results.length > 0 ? (
            <div className={defaultStyle.pagenation_card}>
              <Pagination totalPage={movieData.total_pages} />
            </div>
          ) : null}
        </>
      </MaxWidthLayout>
    </div>
  );
};

export default Search;
