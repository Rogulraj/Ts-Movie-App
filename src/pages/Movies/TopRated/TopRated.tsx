import React, { useEffect } from "react";
import MovieCard from "@components/Card/MovieCard/MovieCard";
import CustomHelmet from "@components/Elements/CustomHelmet/CustomHelmet";
import PrimaryHeader from "@components/Headers/PrimaryHeader/PrimaryHeader";
import MaxWidthLayout from "@components/Layout/MaxWidthLayout/MaxWidthLayout";
import { MovieFeatureActions } from "@redux/features/movie.feature";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { useFetchTopRatedMoviesQuery } from "@services/movie.service";
import defaultStyle from "./TopRated.module.css";
import Pagination from "@components/Card/Pagination/Pagination";
import Loader from "@components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import routePaths from "@constants/routePaths";
import { toast } from "react-toastify";

const TopRated = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { movieData, currentPageIndex } = useAppSelector(
    (state) => state.movieFeature
  );

  const navigate = useNavigate();
  const {
    data: fetchMovieData,
    isError: isMovieError,
    isSuccess: isMovieSuccess,
    isLoading,
  } = useFetchTopRatedMoviesQuery({
    index: currentPageIndex,
  });

  useEffect(() => {
    if (isMovieSuccess) {
      dispatch(MovieFeatureActions.bulkEditMovieList(fetchMovieData));
    } else if (isMovieError) {
      toast.error("Something went wrong!");
    }
  }, [isMovieSuccess, isMovieError, fetchMovieData]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={defaultStyle.main_layout}>
      <CustomHelmet title="Top-Rated Movies" />
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
            <div style={{ color: "wheat" }}>no data</div>
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

export default TopRated;
