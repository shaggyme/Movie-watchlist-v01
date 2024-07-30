import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./lib/font-awesome/css/all.min.css";
import Header from "./components/Header";
import Add from "./components/Add";
import Watchlist from "./components/Watchlist";
import { GlobalProvider } from "./context/GlobalState";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Watchlist />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
