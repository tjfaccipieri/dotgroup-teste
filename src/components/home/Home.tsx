import { Heart, Star } from 'phosphor-react';
import { useState, useEffect } from 'react';
import { Genres } from '../services/Genres';
import { getAllGenres, getNewMovies } from '../services/Service';

export function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [genres, setGenres] = useState<any[]>([]);

  async function getMovies() {
    await getNewMovies(`/discover/movie`, setMovies);
  }
  
  async function getGenres() {
    await getAllGenres(`genre/movie/list?language=pt`, setGenres)
  }

  useEffect(() => {
    getMovies();
    getGenres()
    // console.log(movies);
    // console.log(genres );
  }, [movies.length]);

  return (
    <div className="flex gap-3 flex-wrap justify-evenly mx-auto container my-8">
      {movies.map((movie) => {
        return (
          <div className="border xl:w-1/5 md:w-64 rounded-xl relative overflow-hidden">
            <div>
              <Heart size={32} weight="fill" className='text-red-500 z-10 absolute right-2 top-2' />
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                className="object-fill h-80 w-full"
                alt=""
              />
              <p className="text-center text-sm text-slate-800 stroke-2 stroke-slate-100 font-semibold">
                Lançado em: {new Intl.DateTimeFormat('pt-BR').format(new Date(movie.release_date))}
              </p>
            </div>
            <p className='text-center text-xl text-slate-900 font-bold'>{movie.title}</p>
            <div className="flex justify-center gap-4">
              <p className='flex items-center gap-2 justify-center'>
                <Star size={24} weight="fill" className='text-yellow-500' /> <span className='font-bold'>{movie.vote_average}</span>
              </p>
              {genres.map((genre) => {
                if(genre.id === movie.genre_ids[0]){
                  return (
                    <p className='font-semibold'>{genre.name}</p>
                  )
                }
              })}
            </div>

            <p className='text-center'>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(movie.popularity.toString().slice(0,2))}</p>

            <button className='bg-indigo-700 w-full rounded-md py-2 text-gray-100 font-semibold hover:bg-indigo-500'>Adicionar</button>
          </div>
        );
      })}
    </div>
  );
}
