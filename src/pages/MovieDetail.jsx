
import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { fetchMovieById } from "../services/api";

function MovieDetail() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovie = async () => {
            const data = await fetchMovieById(id);
            setMovie(data);
            setLoading(false);
        };

        getMovie();
    }, [id]);
    if (loading) {
        return <p>Loading movie details...</p>;
    }

    return (
        <main className="min-h-screen bg-rose-50 px-5 py-10">
            <Link
                to="/"
                className="mx-auto mb-6 block max-w-4xl text-sm font-medium text-rose-600 hover:text-rose-800"
            >
                ← Back to search
            </Link>
            <section className="mx-auto grid max-w-4xl gap-8 rounded-3xl bg-white p-6 shadow-lg md:grid-cols-[280px_1fr]">
                <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                    alt={movie.Title}
                    className="w-full rounded-2xl object-cover shadow-md"
                />

                <div>
                    <p className="text-sm font-medium text-rose-500">
                        {movie.Year} · {movie.Runtime}
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-gray-800">
                        {movie.Title}
                    </h1>

                    <p className="mt-3 text-sm text-gray-500">
                        {movie.Genre}
                    </p>

                    <div className="mt-6 space-y-3 text-sm leading-6 text-gray-700">
                        <p>
                            <span className="font-semibold">Director:</span>{" "}
                            {movie.Director}
                        </p>

                        <p>
                            <span className="font-semibold">Actors:</span>{" "}
                            {movie.Actors}
                        </p>

                        <p>
                            <span className="font-semibold">IMDb rating:</span>{" "}
                            {movie.imdbRating} / 10
                        </p>
                    </div>

                    <div className="mt-6 border-t border-gray-100 pt-5">
                        <h2 className="font-semibold text-gray-800">Plot</h2>

                        <p className="mt-2 leading-7 text-gray-600">
                            {movie.Plot}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MovieDetail