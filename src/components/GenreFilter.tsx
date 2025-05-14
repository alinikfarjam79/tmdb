"use client";
import { Genre } from "@/types";

export default function GenreFilter({
  genres,
  selectedGenre,
  onChange,
}: {
  genres: Genre[];
  selectedGenre: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select
      value={selectedGenre}
      onChange={onChange}
      className="p-2 border rounded"
    >
      <option value="">All Genres</option>
      {genres.map((g) => (
        <option key={g.id} value={g.id}>
          {g.name}
        </option>
      ))}
    </select>
  );
}
