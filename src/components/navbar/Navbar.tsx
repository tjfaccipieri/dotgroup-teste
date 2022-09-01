import { Heart, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export function Navbar(props: any) {
  
  return (
    <div className="bg-indigo-500 py-3 px-8 flex w-screen justify-between overflow-x-hidden sticky-top">
      <Link to="/">
        <h1 className="text-xl text-gray-100 uppercase font-bold">logo</h1>
      </Link>
      <input
        type="text"
        className="w-1/4 px-2 border rounded border-gray-500"
        placeholder="Pesquisa"
      />
      <div className="flex gap-8 text-gray-100">
        
          <Heart
            size={36}
            weight="fill"
            className="hover:text-red-600 cursor-pointer"
            onClick={props.handleFavs}
          />
        
          <ShoppingCart
            size={36}
            weight="fill"
            className="hover:text-gray-600 cursor-pointer"
            onClick={props.handleChart}
          />
      </div>
    </div>
  );
}
