import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QrCdDisplay from "./components/QrCodeDisplay";
import MovieList from "./components/MovieList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QrCdDisplay />} />
        <Route path="/movies/view/:id" element={<MovieList />} />
      </Routes>
    </Router>
  );
}

export default App;
