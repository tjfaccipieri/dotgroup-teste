import { Heart, HeartBreak, ShoppingCart, Star, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { getFavMovies } from '../services/Service';

export function Carrinho(props: any) {
  const [favs, setFavs] = useState<any[]>([]);

  async function getFavMoviesList() {
    await getFavMovies(`/account/14512892/favorite/movies`, setFavs);
  }

  useEffect(() => {
    getFavMoviesList();
    console.log(favs);
  }, [favs.length]);

  return (
    <>
      {props.isOpen ? (
        <div
          className={`w-[20vw] h-[93.7vh] border-l-2 border-slate-400 right-0 top-[6.3vh] ease-in-out transition-transform duration-500 fixed p-4 z-20 bg-slate-50 ${
            props.isOpen ? 'translate-x-0' : 'translate-x-full '
          } `}
        >
          <div className='flex justify-between'>
          <p className="text-xl font-medium">Meu Carrinho</p>
          <p className="text-lg text-indigo-600 underline">Esvaziar</p>
          </div>
          <ul className="list-none mt-6">
            {favs.map((fav) => {
              return (
                <li className="w-full flex justify-between gap-2 items-center mb-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${fav.poster_path}`}
                    alt=""
                    className="w-10 aspect-square"
                  />
                  <p className="w-2/6 truncate ">{fav.title}</p>
                  <p className="text-center">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(fav.popularity.toString().slice(0, 2))}
                  </p>
                  <ShoppingCart
                    size={20}
                    weight="fill"
                    className="hover:text-teal-600 cursor-pointer"
                  />
                  <HeartBreak
                    size={20}
                    weight="fill"
                    className="hover:text-red-500 cursor-pointer"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
