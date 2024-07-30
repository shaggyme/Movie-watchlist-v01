import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div className="inner-card-controls">
      {type === 'watchlist' && (
        <>
          <button className="ctrl-btn" onClick={handleDetailsClick}>
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button className="ctrl-btn" onClick={() => removeMovieFromWatchlist(movie.imdbID)}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
