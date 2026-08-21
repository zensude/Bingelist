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
        <main className="mx-auto max-w-6xl px-4 py-10">
            <section className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-slate-800">
                    My Favorites
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                    {favorites.length}{" "}
                    {favorites.length === 1 ? "movie saved" : "movies saved"}
                </p>
            </section>


            {favorites.length === 0 ? (
                <div className="rounded-2xl bg-pink-50 px-6 py-12 text-center">
                    <p className="text-slate-500">
                        No favorites yet.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {favorites.map((movie) => (
                        <MovieCard
                            key={movie.imdbID}
                            movie={movie}
                            toggleFavorite={toggleFavorite}
                            favorites={favorites}
                        />
                    ))}
                </div>
            )}
        </main>
    );
};

export default Favorites;