import { useState } from "react";
import styles from "./MovieCard.module.scss";
import Modal from "../Modal/Modal";

const MovieCard = ({ title = "Movie Title", imgUrl, refProp, movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div ref={refProp} className={styles.movieCard} onClick={handleCardClick}>
        <img
          src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
          alt="movie-card-img"
        />
        <p>{title}</p>
      </div>
      {isModalOpen && (
        <Modal
          handleCloseClick={() => {
            setIsModalOpen(false);
          }}
          movie={movie}
        />
      )}
    </>
  );
};

export default MovieCard;
