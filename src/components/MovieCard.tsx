"use client";
import Link from "next/link";
import { Movie } from "@/types";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-white rounded-xl shadow p-2 hover:scale-105 transition">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded"
        />
        <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
        <p className="text-sm text-gray-500">{movie.release_date}</p>
      </div>
    </Link>
  );
}
