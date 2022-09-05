import { AxiosError } from 'axios';
import { Heart, Star } from 'phosphor-react';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  getAllGenres,
  getFavMovies,
  getNewMovies,
  postChartMovies,
  postFavMovie,
} from '../services/Service';

export function Home(props: any) {
  const [movies, setMovies] = useState<any[]>([]);
  const [genres, setGenres] = useState<any[]>([]);
  // const [favs, setFavs] = useState<any[]>([]);
  const [favorite, setFavorite] = useState({
    media_type: 'movie',
    media_id: 0,
    favorite: true,
  });

  const [movieChart, setMovieChart] = useState({
    media_id: 0,
  });

  let filter: string = props.inputText
  let vazio: boolean = false

  async function getMovies() {
    await getNewMovies(`/discover/movie`, setMovies);
  }

  async function getGenres() {
    await getAllGenres(`/genre/movie/list`, setGenres);
  }

  async function favMovie() {
    await postFavMovie(`/account/14512892/favorite`, favorite, setFavorite)
      setMovieChart({
        media_id: 0
      })
      toast.info('Produto adicionado aos favoritos!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        progress: undefined,
        });
  }

  async function buyMovie() {
    try {
      await postChartMovies(`/list/8215623/add_item`, movieChart, setMovieChart);
      toast.info('Produto adicionado ao carrinho!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        progress: undefined,
        });
    } catch (error) {
      console.log(error)
    }
  }

  function addFavoriteMovie(id: number) {
    setFavorite({
      media_type: 'movie',
      media_id: id,
      favorite: true,
    });
    
  }

  useEffect(() => {
    if(favorite?.media_id !== 0){
      favMovie();
    }
  }, [addFavoriteMovie]);

  function addMovieToBuyChart(id: number) {
    setMovieChart({
      media_id: id,
    });
    
  }
  
  useEffect(() => {
    if(movieChart.media_id !== 0){
      buyMovie();
      console.log('tentou comprar')
      // setMovieChart({media_id: 0})
    }
  }, [addMovieToBuyChart]);

  useEffect(() => {
    getMovies();
    getGenres();
  }, [movies.length]);

  const filteredList = movies.filter((elements) => {
    if(filter === '') {
      return elements
    } else {
      console.log(elements.title.toLowerCase().includes(filter))
      if(elements === '') {
        return vazio = true
      }
      return elements.title.toLowerCase().includes(filter)
    }
  })

  return (
    
    <div className="flex gap-3 flex-wrap justify-evenly mx-auto container my-8">
      <div className={`${vazio ? 'block' : 'hidden'}`}>Sorry...sem filmes</div>
      {filteredList.map((movie) => {
        return (
          <div
            className="border w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-1/5 rounded-xl relative overflow-hidden"
            key={movie.id}
          >
            <div>
              <Heart
                size={32}
                weight="fill"
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
