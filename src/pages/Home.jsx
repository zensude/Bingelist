
import React, { useState, useEffect } from 'react';
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

const Home = ({ favorites, setFavorites }) => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

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
            setLoading(true);

            const data = await fetchMovies(search);
            setMovies(data.Search || []);

            setLoading(false);
        };
        getMovies();
    }, [search]);
    return (
        <div>
            <h1>Welcome to BingeList </h1>
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
                {loading && <p>Loading...</p>}
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
                <p>Searching for:{search} </p>
            </div>

        </div>

    )
}

export default Home;