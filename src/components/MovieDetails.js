import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=fc1fef96`);
      const details = await response.json();
      setMovieDetails(details);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img 
          src={movieDetails.Poster !== 'N/A' ? movieDetails.Poster : 'image_not_found.png'} 
          alt="movie poster" 
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movieDetails.Title}</h3>
        <ul className="movie-misc-info">
          <li className="year">Year: {movieDetails.Year}</li>
          <li className="rated">Ratings: {movieDetails.Rated}</li>
          <li className="released">Released: {movieDetails.Released}</li>
          <li className='imdb-rating'>IMDb RATING: {movieDetails.imdbRating}</li>
        </ul>
        <p className="genre"><b>Genre:</b> {movieDetails.Genre}</p>
        <p className="writer"><b>Writer:</b> {movieDetails.Writer}</p>
        <p className="actors"><b>Actors:</b> {movieDetails.Actors}</p>
        <p className="plot"><b>Plot:</b> {movieDetails.Plot}</p>
        <p className="language"><b>Language:</b> {movieDetails.Language}</p>
        <p className="awards"><b><i className="fas fa-award"></i></b> {movieDetails.Awards}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
