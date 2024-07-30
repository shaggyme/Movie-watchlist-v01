import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Helper function to safely parse JSON from localStorage
const safeJSONParse = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error(`Error parsing JSON for key "${key}":`, error);
    return [];
  }
};

// initial state
const initialState = {
  watchlist: safeJSONParse("watchlist"),
  // watched: safeJSONParse("watched"),
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
