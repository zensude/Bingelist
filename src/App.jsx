import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import './App.css'

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <Navbar />
      <Home favorites={favorites} setFavorites={setFavorites} />
      <Favorites favorites={favorites} />
    </>
  );
}

export default App;
