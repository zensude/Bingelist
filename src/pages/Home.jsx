
import React, { useState, useEffect } from 'react';
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

const Home = ({ favorites, setFavorites }) => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [backendMessage, setBackendMessage] = useState("");

    const toggleFavorite = (movie) => {
        const isFav = favorites.find((m) => m.imdbID === movie.imdbID);

        if (isFav) {
            setFavorites(favorites.filter((m) => m.imdbID !== movie.imdbID));
        } else {
            setFavorites([...favorites, movie]);
        }
    };
    useEffect(() => {
        if (search.length < 3) return;
        // const getMovies = async () => {
        //     const data = await fetchMovies(search);
        //     setMovies(data.Search || []);
        // };
        const getMovies = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await fetchMovies(search);

                if (data.Response === "False") {
                    setError(data.Error);
                    setMovies([]);
                } else {
                    setMovies(data.Search || []);
                }

            } catch (err) {
                setError("Something went wrong");
                setMovies([]);
            } finally {
                setLoading(false);
            }
        };
        getMovies();
    }, [search]);
    useEffect(() => {
        fetch("http://127.0.0.1:5001/")
            .then((res) => res.json())
            .then((data) => setBackendMessage(data.message))
            .catch(() => setBackendMessage("Backend connection failed"));
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-violet-200 text-gray-800 p-5">
            <h1 className="text-5xl font-extrabold text-center text-rose-600 mb-3">
                Welcome to BingeList ✨
            </h1>

            <p className="text-center text-gray-600 mb-8">
                Search your favorite movies and build your personal watchlist.
            </p>
            <div className="flex justify-center mb-8"><input
                type="text"
                placeholder="Search movies or series"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full max-w-lg rounded-full border border-rose-300 bg-white px-6 py-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
            /></div>

            <div className="flex flex-wrap justify-center gap-6 py-6">
                {loading && (
                    <div style={{
                        width: "50px",
                        height: "50px",
                        border: "5px solid #ccc",
                        borderTop: "5px solid red",
                        borderRadius: "50%",
                        margin: "20px auto",
                        animation: "spin 1s linear infinite"
                    }} />
                )}
                {search.length > 0 && search.length < 3 && (
                    <p>Please enter at least 3 characters</p>
                )}
                {/* {movies.map((movie, index) => (
                    <p key={movie.imdbID + index}>
                        {movie.Title}
                    </p>
                ))} */}
                {movies.map((movie, index) => (
                    // <MovieCard key={movie.imdbID + index} movie={movie} />
                    <MovieCard
                        key={movie.imdbID + index}
                        movie={movie}
                        toggleFavorite={toggleFavorite}
                        favorites={favorites}
                    />
                ))}

                {!loading && search.length >= 3 && movies.length === 0 && (
                    <p>No results found </p>
                )}
                {error && <p style={{ color: "red" }}>{error}</p>}
                <p>Searching for:{search} </p>
            </div>

        </div>

    );
};



export default Home;