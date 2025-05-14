import { Movie } from "@/types";
import { fetchMovieDetails } from "@/utils/fetcher";

export default async function Page({ params }: { params: { id: string } }) {
  const movie: Movie = await fetchMovieDetails(params.id);

  return (
    <div className="p-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded w-full max-w-md"
      />
      <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
      <p className="text-gray-600">{movie.release_date}</p>
      <p className="mt-4">{movie.overview}</p>
    </div>
  );
}
