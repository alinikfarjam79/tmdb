const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzU5NzgyNDI3NjNlM2RmOWNhYmNhN2RlZGQ3Y2MyOSIsIm5iZiI6MTY1Mjg1Mzc1OS45NTYsInN1YiI6IjYyODQ4YmZmZGNmODc1MmIyNzFmNjU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zgzi56Od_EBIch2n3j30KtupBjgCwBepqYwzpTWOclQ",
  },
};
export async function fetchMovies(query?: string) {
  const endpoint = query ? `/search/movie?query=${query}` : "/movie/popular";
  const res = await fetch(`${API_URL}${endpoint}`, options);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}

export async function fetchMovieDetails(id: string) {
  const res = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`, options);
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
}

export async function fetchGenres() {
  const res = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch genres");
  return res.json();
}

export async function fetchMoviesByGenre(genreId: string) {
  const res = await fetch(
    `${API_URL}/discover/movie?with_genres=${genreId}&api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch movies by genre");
  return res.json();
}
