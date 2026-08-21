
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../services/api";

function MovieDetail() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            const data = await fetchMovieById(id);
            setMovie(data);
        };

        getMovie();
    }, [id]);

    return <h1>IMDb ID: {id}</h1>;
}

export default MovieDetail