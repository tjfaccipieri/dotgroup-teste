import { Heart, ShoppingCart } from "phosphor-react";
import logo from './logo.svg'

export function Navbar() {
  return(
    <div className="bg-indigo-300 py-3 px-4 flex w-screen justify-between">
      {/* <h1 className="text-xl text-gray-100 uppercase font-bold">logo</h1> */}
      <img src={logo} alt="Logotipo da marca" className="" />
      <input type="text" className="w-1/4 px-2 border rounded border-gray-500" placeholder='Pesquisa' />
      <div className='flex gap-2 text-gray-100'>
        <Heart size={36} weight="fill" className="hover:text-red-600 cursor-pointer" />
        <ShoppingCart size={36} weight="fill" className="hover:text-gray-600 cursor-pointer"/>
      </div>
    </div>
  )
}