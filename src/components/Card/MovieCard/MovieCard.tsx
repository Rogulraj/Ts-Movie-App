// packages
import React from "react";

// config
import { VITE_API_IMAGE_BASE_URL } from "@config/index";

// css
import defaultStyle from "./MovieCard.module.css";

// interfaces
interface MoviCardProps {
  imageUrl: string;
  title: string;
  rating: string;
  movieId: number;
}

// react component
const MovieCard = ({
  imageUrl,
  movieId,
  rating,
  title,
}: MoviCardProps): React.ReactElement => {
  return (
    <div className={defaultStyle.main_layout}>
      <div className={defaultStyle.image_card}>
        <img
          className={defaultStyle.movie_image}
          src={`${VITE_API_IMAGE_BASE_URL}/t/p/w500${imageUrl}`}
          alt="movie"
        />
      </div>
      <div className={defaultStyle.content_card}>
        <h3 className={defaultStyle.movie_title}>{title}</h3>
        <p className={defaultStyle.rating_text}>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
