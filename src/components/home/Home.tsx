import { Heart, Star } from 'phosphor-react';
import { useState, useEffect } from 'react';
import {
  getAllGenres,
  getFavMovies,
  getNewMovies,
  postChartMovies,
  postFavMovie,
} from '../services/Service';

export function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [genres, setGenres] = useState<any[]>([]);
  const [favs, setFavs] = useState<any[]>([]);
  const [favorite, setFavorite] = useState({
    media_type: 'movie',
    media_id: 0,
    favorite: true,
  });

  const [movieChart, setMovieChart] = useState({
    media_id: 0,
  });

  let heart: string = '';

  async function getMovies() {
    await getNewMovies(`/discover/movie`, setMovies);
  }

  async function getGenres() {
    await getAllGenres(`/genre/movie/list?language=pt`, setGenres);
  }

  async function getFavMoviesList() {
    await getFavMovies(`/account/14512892/favorite/movies`, setFavs);
  }

  async function favMovie() {
    await postFavMovie(`/account/14512892/favorite`, favorite, setFavorite);
  }

  async function buyMovie() {
    await postChartMovies(`/list/8215623/add_item`, movieChart, setMovieChart);
  }

  function addFavoriteMovie(id: number) {
    setFavorite({
      ...favorite,
      media_type: 'movie',
      media_id: id,
      favorite: true,
    });
  }

  useEffect(() => {
    favMovie();
  }, [addFavoriteMovie]);

  function addMovieToBuyChart(id: number) {
    setMovieChart({
      media_id: id,
    });
  }

  useEffect(() => {
    buyMovie();
  }, [addMovieToBuyChart]);

  useEffect(() => {
    getMovies();
    getGenres();
  }, [movies.length]);

  return (
    <div className="flex gap-3 flex-wrap justify-evenly mx-auto container my-8">
      {movies.map((movie) => {
        return (
          <div
            className="border w-[80vw] sm:w-[50vw] md:w-[20vw] lg:w-1/5 rounded-xl relative overflow-hidden"
            key={movie.id}
          >
            <div>
              <Heart
                size={32}
                weight="regular"
                className="text-red-500 z-10 absolute right-2 top-2 cursor-pointer"
                onClick={() => addFavoriteMovie(movie.id)}
              />
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                className="object-fill h-80 w-full"
                alt=""
              />
              <p className="text-center text-sm text-slate-800 stroke-2 stroke-slate-100 font-semibold">
                Lançado em:{' '}
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(movie.release_date)
                )}
              </p>
            </div>
            <p className="text-center text-xl text-slate-900 font-bold sm:truncate px-4 ">
              {movie.title}
            </p>
            <div className="flex justify-center gap-4">
              <p className="flex items-center gap-2 justify-center">
                <Star size={24} weight="fill" className="text-yellow-500" />{' '}
                <span className="font-bold">{movie.vote_average}</span>
              </p>
              {genres.map((genre) => {
                if (genre.id === movie.genre_ids[0]) {
                  return (
                    <p className="font-semibold" key={genre.id}>
                      {genre.name}
                    </p>
                  );
                }
              })}
            </div>

            <p className="text-center">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(parseFloat(movie.popularity) / 100)}
            </p>

            <button
              className="bg-indigo-700 w-full rounded-md py-2 text-gray-100 font-semibold hover:bg-indigo-500"
              onClick={() => addMovieToBuyChart(movie.id)}
            >
              Adicionar
            </button>
          </div>
        );
      })}
    </div>
  );
}
