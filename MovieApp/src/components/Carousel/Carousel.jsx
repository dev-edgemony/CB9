import { useRef } from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./Carousel.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = ({ list = [] }) => {
  const carouselRef = useRef();
  const movieCardRef = useRef();

  const handleArrowClick = (type) => {
    const movieCardWidth = movieCardRef.current?.offsetWidth;

    if (type === "left") {
      carouselRef.current.scroll({
        top: 0,
        left: carouselRef.current.scrollLeft - movieCardWidth,
        behavior: "smooth",
      });
    } else {
      carouselRef.current.scroll({
        top: 0,
        left: carouselRef.current.scrollLeft + movieCardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselArrows}>
        <IoIosArrowBack
          className={styles.arrow}
          onClick={() => {
            handleArrowClick("left");
          }}
        />
        <IoIosArrowForward
          className={styles.arrow}
          onClick={() => {
            handleArrowClick();
          }}
        />
      </div>
      <div ref={carouselRef} className={styles.carousel}>
        {list.map((movie, index) => {
          return (
            <MovieCard
              refProp={movieCardRef}
              imageUrl={movie.poster_path}
              key={index}
              title={movie.original_name}
              movie={movie}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
