"use client";
export default function SearchBar({
  query,
  onChange,
}: {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={onChange}
      className="p-2 border rounded w-full"
    />
  );
}
