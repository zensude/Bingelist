import React from 'react'

function MovieCard({ movie, toggleFavorite, favorites }) {
    const isFav = favorites.some((m) => m.imdbID === movie.imdbID);

    return (
        <div className="w-52 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                onError={(e) => {
                    e.target.src = "/no-image.png";
                }}
                width={200}
                height={300}
            />

            <div className="p-3">
                <h3 className="text-base m-4">
                    {movie.Title}
                </h3>

                <p className="text-gray-500 text-sm">
                    {movie.Year}
                </p>

                <button
                    onClick={() => toggleFavorite(movie)}
                    className={`mt-3 px-3 py-2 rounded-lg text-white cursor-pointer transition duration-300 ${isFav
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-gray-500 hover:bg-gray-600"
                        }`}
                >
                    {isFav ? "❤️ Favorited" : "🤍 Add"}
                </button>
            </div>

        </div>
    )
}

export default MovieCard;