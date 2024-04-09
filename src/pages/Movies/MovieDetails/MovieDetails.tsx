import React from "react";

import defaultStyle from "./MovieDetails.module.css";
import CustomHelmet from "@components/Elements/CustomHelmet/CustomHelmet";
import PrimaryHeader from "@components/Headers/PrimaryHeader/PrimaryHeader";
import MaxWidthLayout from "@components/Layout/MaxWidthLayout/MaxWidthLayout";
import { VITE_API_IMAGE_BASE_URL } from "@config/index";
import {
  useFetchCreditsDetailsQuery,
  useFetchMovieDetailsQuery,
} from "@services/movie.service";
import { useNavigate, useParams } from "react-router-dom";
import CastCard from "@components/Card/CastCard/CastCard";
import Loader from "@components/Loader/Loader";

import { IoArrowBackCircleSharp } from "react-icons/io5";
import colorTheme from "@constants/colorTheme";

const MovieDetails = (): React.ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: fetchMovieData,
    isError: isMovieError,
    isSuccess: isMovieSuccess,
    isLoading: isMovieLoading,
  } = useFetchMovieDetailsQuery({ id: id as string });

  const {
    data: fetchCreditsData,
    isError: isCreditsError,
    isSuccess: isCreditsSuccess,
    isLoading: isCreditsLoading,
  } = useFetchCreditsDetailsQuery({ id: id as string });

  if (isCreditsLoading || isMovieLoading) return <Loader />;

  return (
    <div className={defaultStyle.main_layout}>
      <CustomHelmet title="Movie Details" />
      <PrimaryHeader />
      <MaxWidthLayout>
        <div className={defaultStyle.sub_layout}>
          <div
            className={defaultStyle.back_icon_card}
            onClick={() => navigate(-1)}>
            <IoArrowBackCircleSharp fill={colorTheme.danger} size={25} />
            <p className={defaultStyle.back_text}>back</p>
          </div>
          <div className={defaultStyle.content_card_1}>
            <div className={defaultStyle.image_details_card}>
              <div className={defaultStyle.image_card}>
                <img
                  className={defaultStyle.movie_image}
                  src={`${VITE_API_IMAGE_BASE_URL}/t/p/w500${fetchMovieData?.poster_path}`}
                  alt="movie"
                />
              </div>
              <div className={defaultStyle.details_card}>
                <h2 className={defaultStyle.movie_title}>
                  {fetchMovieData?.title}
                </h2>
                <h5 className={defaultStyle.movie_rating}>
                  Rating: {fetchMovieData?.vote_average}
                </h5>
                <p className={defaultStyle.movie_minute}>
                  {fetchMovieData?.runtime} min
                </p>
                <ul className={defaultStyle.genre_list_card}>
                  {fetchMovieData?.genres.map((item, _index) => (
                    <li key={_index}>
                      <p className={defaultStyle.movie_genre}>
                        {item.name + "," + "  "}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className={defaultStyle.release_date}>
                  Release Date {fetchMovieData?.release_date}
                </p>
              </div>
            </div>
            <div className={defaultStyle.overview_card}>
              <h3 className={defaultStyle.overview_title}>Overview</h3>
              <p className={defaultStyle.overview_paragraph}>
                {fetchMovieData?.overview}
              </p>
            </div>
            <div className={defaultStyle.poster_card}>
              <img
                src={`${VITE_API_IMAGE_BASE_URL}/t/p/w500${fetchMovieData?.backdrop_path}`}
                alt="movie-poster"
                className={defaultStyle.movie_poster}
              />
            </div>
          </div>
          <div className={defaultStyle.content_card_2}>
            <h2 className={defaultStyle.cast_title}>Cast</h2>
            <ul className={defaultStyle.cast_list_card}>
              {fetchCreditsData?.cast?.map((item, _index) => (
                <li key={_index}>
                  <CastCard
                    imageUrl={item.profile_path}
                    name={item.name}
                    character={item.character}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MaxWidthLayout>
    </div>
  );
};

export default MovieDetails;
