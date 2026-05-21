
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
        <div>
            <h1>Welcome to BingeList </h1>
            <p>{backendMessage}</p>
            <input
                type="text"
                placeholder="Search movies or series"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                padding: "20px"
            }}>
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