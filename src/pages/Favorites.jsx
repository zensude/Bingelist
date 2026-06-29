import MovieCard from "../components/MovieCard";

const Favorites = ({ favorites, setFavorites }) => {

    const toggleFavorite = (movie) => {
        const isFav = favorites.find((m) => m.imdbID === movie.imdbID);

        if (isFav) {
            setFavorites(favorites.filter((m) => m.imdbID !== movie.imdbID));
        } else {
            setFavorites([...favorites, movie]);
        }
    };

    return (
        <div>
            <h1>My Favorites ({favorites.length})</h1>

            <div className="flex flex-wrap justify-center gap-5 bg-pink-100 p-5 rounded-xl">
                {favorites.length === 0 && (
                    <p>No favorites yet </p>
                )}

                {favorites.map((movie) => (
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie}


                        toggleFavorite={toggleFavorite}
                        favorites={favorites}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites;