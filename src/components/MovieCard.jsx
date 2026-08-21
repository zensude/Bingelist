import { Link } from "react-router-dom";

function MovieCard({ movie, toggleFavorite, favorites }) {
    const isFav = favorites.some((m) => m.imdbID === movie.imdbID);

    return (
        <div className="w-full max-w-52 overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Link to={`/movie/${movie.imdbID}`} className="block">
                <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                    onError={(e) => {
                        e.target.src = "/no-image.png";
                    }}
                    alt={movie.Title}
                    className="h-72 w-full object-cover"
                />

                <div className="p-4">
                    <h3 className="h-12 text-base font-semibold text-gray-800">
                        {movie.Title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        {movie.Year}
                    </p>
                </div>
            </Link>

            <div className="px-4 pb-4">
                <button
                    onClick={() => toggleFavorite(movie)}
                    className={`w-full rounded-lg px-3 py-2 text-sm font-medium text-white transition duration-300 ${isFav
                            ? "bg-rose-500 hover:bg-rose-600"
                            : "bg-slate-600 hover:bg-slate-700"
                        }`}
                >
                    {isFav ? "♥ Favorited" : "♡ Add to favorites"}
                </button>
            </div>
        </div>
    );
}

export default MovieCard;