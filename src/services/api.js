const API_KEY = "57df3965";

export const fetchMovies = async (query) => {
    const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await res.json();
    return data;
}