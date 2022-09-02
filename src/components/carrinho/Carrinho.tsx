import { Heart, HeartBreak, ShoppingCart, Star, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { clearChart, getChartMovies } from '../services/Service';

export function Carrinho(props: any) {
  const [movies, setMovies] = useState<any[]>([]);

  let total: number = 0;

  async function getChartMoviesList() {
    await getChartMovies(`list/8215623`, setMovies);
  }

  async function clearChartMovies() {
    await clearChart('/list/8215623/clear?confirm=true');
  }

  useEffect(() => {
    getChartMoviesList();
  }, [props.isOpen, getChartMoviesList, movies.length]);

  return (
    <>
      {props.isOpen ? (
        <div
          className={`w-screen md:w-[20vw] h-[93.7vh] border-l-2 border-slate-400 right-0 top-[6.3vh] ease-in-out transition-transform duration-500 fixed p-8 md:p-4 z-20 bg-slate-50 flex flex-col justify-between ${
            props.isOpen ? 'translate-x-0' : 'translate-x-full '
          }`}
        >
          <div>
          <div className="flex justify-between">
            <p className="text-xl font-medium">Meu Carrinho</p>
            <p
              className="text-lg text-indigo-600 underline cursor-pointer"
              onClick={clearChartMovies}
            >
              Esvaziar
            </p>
          </div>
          <ul className="list-none mt-6">
            {movies.map((movie) => {
              return (
                <li
                  className="w-full flex justify-between gap-2 items-center mb-4"
                  key={movie.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                    className="w-10 aspect-square"
                  />
                  <p className="w-2/6 truncate ">{movie.title}</p>
                  <p className="text-center">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(parseFloat(movie.popularity) / 100)}
                  </p>
                  
                  <Trash
                    size={20}
                    weight="fill"
                    className="hover:text-red-500 cursor-pointer"
                  />
                </li>
              );
            })}
          </ul>
          </div>

          <div>
          <div className="flex items-center justify-between mb-4">
            <p className='text-xl'>
              Total:         
            </p>
            <p className='text-2xl font-semibold'>{movies.map((price) => {
                {
                  total = total + parseFloat(price.popularity) / 100;
                }
                return <></>;
              })}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(total)}</p>
          </div>
          <Link to='/checkout' >
            <button onClick={props.isOpen} className='bg-indigo-700 w-full rounded-md py-2 text-gray-100 font-semibold hover:bg-indigo-500'>Finalizar compra</button>
          </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
