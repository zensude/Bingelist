import React, { useState, useEffect } from 'react';
import { fetchMovies } from "../services/api";

const Home = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
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
            <div>
                {loading && <p>Loading...</p>}
                {movies.map((movie, index) => (
                    <p key={movie.imdbID + index}>
                        {movie.Title}
                    </p>
                ))}
            </div>
            <p>Searching for:{search} </p>
        </div>
    )
}

export default Home;