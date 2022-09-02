import { Heart, ShoppingCart } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getChartMovies } from '../services/Service';


export function Navbar(props: any) {

  const [movies, setMovies] = useState<any[]>([]);

  async function getChartMoviesList() {
    await getChartMovies(`list/8215623`, setMovies);
  }

  useEffect(() => {
    getChartMoviesList();
  }, [ getChartMoviesList, movies.length]);
  
  return (
    <div className="bg-indigo-500 py-3 px-8 flex w-screen justify-between overflow-x-hidden sticky-top">
      <Link to="/">
        <h1 className="text-xl text-gray-100 uppercase font-bold">logo</h1>
      </Link>
      <input
        type="text"
        className="w-1/4 px-2 border rounded border-gray-500 hidden md:block"
        placeholder="Pesquisa"
      />
      <div className="flex gap-8 text-gray-100">
        
          <Heart
            size={36}
            weight="fill"
            className="hover:text-red-600 cursor-pointer"
            onClick={props.handleFavs}
          />
        
          <div className='relative'>
            {movies.length > 0 ? (<span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline bg-red-600 text-white rounded-full text-xs ml-2 absolute z-10 top-[-5px] left-3">{movies.length}</span>) : <></>}
            <ShoppingCart
              size={36}
              weight="fill"
              className="hover:text-teal-200 cursor-pointer"
              onClick={props.handleChart}
            />
          </div>
      </div>
    </div>
  );
}
