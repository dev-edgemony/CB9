import { useRef } from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./Carosello.module.scss";
import {
  MdOutlineArrowCircleRight,
  MdOutlineArrowCircleLeft,
} from "react-icons/md";

const Carosello = ({ list = [] }) => {
  const caroselloRef = useRef();
  const movieCardRef = useRef();

  const handleArrowClick = (type) => {
    const movieCardWidth = movieCardRef.current?.offsetWidth;

    if (type === "left") {
      caroselloRef.current.scroll({
        top: 0,
        left: caroselloRef.current.scrollLeft - movieCardWidth,
        behavior: "smooth",
      });
    } else {
      caroselloRef.current.scroll({
        top: 0,
        left: caroselloRef.current.scrollLeft + movieCardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.caroselloBox}>
      <div className={styles.arrowBox}>
        <MdOutlineArrowCircleLeft
          className={styles.icone}
          onClick={() => {
            handleArrowClick("left");
          }}
        />
        <MdOutlineArrowCircleRight
          className={styles.icone}
          onClick={() => {
            handleArrowClick();
          }}
        />
      </div>
      <div ref={caroselloRef} className={styles.carosello}>
        {list.map((movie, index) => {
          return (
            <MovieCard
              refProp={movieCardRef}
              title={movie.original_title}
              imgUrl={movie.backdrop_path}
              movie={movie}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carosello;
