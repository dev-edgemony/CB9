import Modal from "../Modal/Modal";
import styles from "./MovieCard.module.scss";
import { useState } from "react";

const MovieCard = ({ title = "Movie title", movie, refProp, imageUrl }) => {
  const [isVibile, setIsVisible] = useState(false);

  const handleCardClick = () => {
    setIsVisible(true);
  };

  return (
    <>
      <div
        className={styles.movieCardWrapper}
        ref={refProp}
        onClick={handleCardClick}
      >
        <img
          className={styles.movieCardImg}
          src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
        />
        <p className={styles.movieCardTitle}>{title}</p>
      </div>
      {isVibile && (
        <Modal
          handleCloseClick={() => {
            setIsVisible(false);
          }}
          movie={movie}
        />
      )}
    </>
  );
};

export default MovieCard;
