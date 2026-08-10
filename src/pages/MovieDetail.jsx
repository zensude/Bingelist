import React from 'react'
import { useParams } from "react-router-dom";
function MovieDetail() {
    const { id } = useParams();

    return <h1>IMDb ID:{id}</h1>;
}

export default MovieDetail