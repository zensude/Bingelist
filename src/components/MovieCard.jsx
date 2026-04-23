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
                    <br></br>

                    <button style={{ backgroundColor: "gray" }} onClick={() => toggleFavorite(movie)}>
                        {favorites.find((m) => m.imdbID === movie.imdbID)
                            ? "❤️"
                            : "🤍"}
                    </button>
                </p>
            </div>

        </div>
    )
}

export default MovieCard