"use client";
import { useEffect, useState } from "react";
import { Movie, Genre } from "@/types";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import GenreFilter from "@/components/GenreFilter";
import { fetchGenres, fetchMovies, fetchMoviesByGenre } from "@/utils/fetcher";

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchGenres().then((res) => setGenres(res.genres));
  }, []);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError("");
      try {
        let res;
        if (selectedGenre) res = await fetchMoviesByGenre(selectedGenre);
        else res = await fetchMovies(query);
        setMovies(res.results);
      } catch (e) {
        console.log(e);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, [query, selectedGenre]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Movie App</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <SearchBar query={query} onChange={(e) => setQuery(e.target.value)} />
        <GenreFilter
          genres={genres}
          selectedGenre={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
}
