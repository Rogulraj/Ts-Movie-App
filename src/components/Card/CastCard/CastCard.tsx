// packages
import React from "react";

// config
import { VITE_API_IMAGE_BASE_URL } from "@config/index";

// css
import defaultStyle from "./CastCard.module.css";

// interfaces
interface CastCardProps {
  imageUrl: string;
  name: string;
  character: string;
}

// react component
const CastCard = ({
  imageUrl,
  name,
  character,
}: CastCardProps): React.ReactElement => {
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
        <h3 className={defaultStyle.movie_title}>{name}</h3>
        <p className={defaultStyle.rating_text}>Character: {character}</p>
      </div>
    </div>
  );
};

export default CastCard;
