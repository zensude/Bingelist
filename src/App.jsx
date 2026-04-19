import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
