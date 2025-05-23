import { fetchMovieDetails } from "@/utils/fetcher";

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movie = await fetchMovieDetails(id);
  return (
    <div className="p-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="rounded w-full max-w-md"
      />
      <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
      <p className="text-gray-600">{movie.release_date}</p>
      <p className="mt-4">{movie.overview}</p>
    </div>
  );
}
