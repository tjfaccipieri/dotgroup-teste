import { Heart, HeartBreak, ShoppingCart, Star, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getChartMovies, getFavMovies, postChartMovies, postFavMovie } from '../services/Service';

export function Favoritos(props: any) {
  const [favs, setFavs] = useState<any[]>([]);
  const [removeFavorite, setRemoveFavorite] = useState({
    media_type: 'movie',
    media_id: 0,
    favorite: false
  })

  const [movies, setMovies] = useState<any[]>([]);
  let comprados: { index: any; }[] = []

  function lista() {
    movies.forEach((el) => {
      comprados.push({index: el.id})
    })
  }

  async function getChartMoviesList() {
    await getChartMovies(`list/8215623`, setMovies);
  }

  const [movieChart, setMovieChart] = useState({
    media_id: 0
  })

  async function getFavMoviesList() {
    await getFavMovies(`/account/14512892/favorite/movies`, setFavs);
    
  }

  async function removeFavMovie() {
    try {
      await postFavMovie(`/account/14512892/favorite`, removeFavorite, setRemoveFavorite) 
    setMovieChart({
      media_id: 0
    }) 
    } catch (error) {
      
    }
  }

  async function buyMovie() {
    try {
      await postChartMovies(`/list/8215623/add_item`, movieChart, setMovieChart)
    setMovieChart({
      media_id: 0
    })
    } catch (error) {
        console.log('deu rium')
        setMovieChart({
          media_id: 0
        })
    }
  }

  function removeFavoriteMovie(id: number) {
    setRemoveFavorite({
      media_type: 'movie',
      media_id: id,
      favorite: false
    })   
  }

  useEffect(() => {
    removeFavMovie()
  }, [removeFavorite])

  function addMovieToBuyChart(id: number) {
    setMovieChart({
      media_id: id
    })
    
  }

  useEffect(() => {
    if(movieChart.media_id !== 0) {
      buyMovie()
    }
  }, [addMovieToBuyChart])


  useEffect(() => {
    getFavMoviesList();
    lista()
  }, [props.isOpen, removeFavMovie, favs.length]);

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
