import React from "react";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.Poster ? (
        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      ) : (
        <div className="filler-poster"></div>
      )}

      <div className="title-card-controls">
        <h3 className="movie-title">{movie.Title}</h3>
      </div>

      <MovieControls type={type} movie={movie} />
    </div>
  );
};

export default MovieCard;
