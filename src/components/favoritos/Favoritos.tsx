import { Heart, HeartBreak, ShoppingCart, Star, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { getFavMovies, postChartMovies, postFavMovie } from '../services/Service';

export function Favoritos(props: any) {
  const [favs, setFavs] = useState<any[]>([]);
  const [favorite, setFavorite] = useState({
    media_type: 'movie',
    media_id: 0,
    favorite: false
  })

  const [movieChart, setMovieChart] = useState({
    media_id: 0
  })

  async function getFavMoviesList() {
    await getFavMovies(`/account/14512892/favorite/movies`, setFavs);
  }

  async function favMovie() {
    await postFavMovie(`/account/14512892/favorite`, favorite, setFavorite)
  }

  async function buyMovie() {
    await postChartMovies(`/list/8215623/add_item`, movieChart, setMovieChart)
  }

  function removeFavoriteMovie(id: number) {
    setFavorite({
      media_type: 'movie',
      media_id: id,
      favorite: false
    })   
  }

  useEffect(() => {
    favMovie()
  }, [favorite])

  function addMovieToBuyChart(id: number) {
    setMovieChart({
      media_id: id
    })
    buyMovie()
  }

  useEffect(() => {
    getFavMoviesList();
  }, [props.isOpen, favMovie, favs.length]);

  return (
    <>
      {props.isOpen ? (
        <div
          className={`w-screen md:w-[20vw] h-[93.7vh] border-l-2 border-slate-400 right-0 top-[6.3vh] ease-in-out transition-transform duration-500 fixed p-8 md:p-4 z-20 bg-slate-50 flex flex-col ${
            props.isOpen ? 'translate-x-0' : 'translate-x-full '
          } `}
        >
          <p className="text-xl font-medium">Meus Favoritos</p>
          <ul className="list-none mt-6">
            {favs.map((fav) => {
              return (
                <li className="w-full flex justify-between gap-2 items-center mb-4" key={fav.id}>
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
                    }).format((parseFloat(fav.popularity) / 100))}
                  </p>
                  <ShoppingCart
                    size={20}
                    weight="fill"
                    className="hover:text-teal-600 cursor-pointer"
                    onClick={() => addMovieToBuyChart(fav.id)}
                  />
                  <HeartBreak
                    size={20}
                    weight="fill"
                    className="hover:text-red-500 cursor-pointer"
                    onClick={() => removeFavoriteMovie(fav.id)}
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
