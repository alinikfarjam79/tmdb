export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
}

export interface Genre {
  id: number;
  name: string;
}
