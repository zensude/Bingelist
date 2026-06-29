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

            <div style={{ padding: "10px" }}>
                <h3 style={{ fontSize: "16px", margin: "5px 0" }}>
                    {movie.Title}
                </h3>

                <p style={{ color: "gray", fontSize: "14px" }}>
                    {movie.Year}
                </p>

                <button
                    onClick={() => toggleFavorite(movie)}
                    style={{
                        backgroundColor: isFav ? "red" : "gray",
                        color: "white",
                        border: "none",
                        padding: "6px 10px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    {isFav ? "❤️ Favorited" : "🤍 Add"}
                </button>
            </div>

        </div>
    )
}

export default MovieCard;