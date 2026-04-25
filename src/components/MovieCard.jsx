import React from 'react'

function MovieCard({ movie, toggleFavorite, favorites }) {
    const isFav = favorites.some((m) => m.imdbID === movie.imdbID);

    return (
        <div style={{
            width: "200px",
            backgroundColor: "#1c1c1c",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
            textAlign: "center"
        }}>

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