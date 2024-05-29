/* eslint-disable react/prop-types */
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movieList = [] }) => {
  console.log(movieList);

  return (
    <div className="movie-list">
      {movieList.map((movie, index) => {
        return (
          <MovieCard
            key={index}
            image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            match={movie.vote_count}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
            categories={movie.categories}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
