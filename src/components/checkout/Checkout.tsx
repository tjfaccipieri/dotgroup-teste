import { Link, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { useState, useEffect, ChangeEvent } from 'react';
import {
  getChartMovies,
  clearChart,
  removeOneMovie,
} from '../services/Service';
import { Trash } from 'phosphor-react';
import useLocalStorage from 'react-use-localstorage';

export function Checkout() {
  const [movies, setMovies] = useState<any[]>([]);
  const [removeAll, setRemoveAll] = useState([]);
  const [remove, setRemove] = useState<any>({
    media_id: 0,
  });
  const [error, setError] = useState<boolean>();

  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    celular: '',
    email: '',
    cep: '',
    endereco: '',
    cidade: '',
    estado: '',
  });

  function updateForm(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  let total: number = 0;

  let validForm = true;

  function isValidEmail(email: any) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: any) => {
    if (!isValidEmail(event.target.value)) {
      setError(true);
      console.log(event.target.value);
    } else {
      setError(false);
    }
  };

  if (
    !form.nome ||
    !form.cpf ||
    !form.celular ||
    !form.email ||
    !form.cep ||
    !form.cidade ||
    !form.endereco ||
    !form.estado
  ) {
    validForm = false;
  }

  // function addStorage(){
  //   movies.forEach(movie => {
  //     movie.price = movie.popularity
  //     movie.qtd = 1
  //   })
  //   localStorage.setItem('filmes', JSON.stringify(movies))
  // }
  // addStorage()
  // let filmes = JSON.parse(localStorage.getItem('filmes') || '{}')

  async function getChartMoviesList() {
    await getChartMovies(`list/8215623`, setMovies);
  }

  async function clearChartMovies() {
    await clearChart('/list/8215623/clear?confirm=true', setRemoveAll);
  }

  async function removeOneMovieFromChart() {
    removeOneMovie('/list/8215623/remove_item', remove, setRemove);
  }

  function removeOne(id: number) {
    setRemove({
      media_id: id,
    });
  }

  useEffect(() => {
    if (remove.media_id !== undefined) {
      removeOneMovieFromChart();
    }
  }, [removeOne]);

  useEffect(() => {
    getChartMoviesList();
  }, [movies.length, removeOneMovieFromChart]);

  return (
    <div className="container mx-auto px-3 md:px-0">
      <h2 className="text-5xl font-medium mb-12 mt-6">Finalizar Compra</h2>

      <div className="flex container justify-between mx-auto gap-48 flex-col md:flex-row">
        <div className="w-full">
          <form action="" className="flex flex-col gap-8">
            <input
              type="text"
              className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
              placeholder="Nome Completo"
              required
              name="nome"
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm(e)}
            />
            <div className="flex gap-4">
              <InputMask
                type="text"
                className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
                placeholder="CPF"
                mask={'999.999.999-99'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm(e)}
                name="cpf"
                required
              />
              <InputMask
                type="text"
                className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
                placeholder="Celular"
                mask={'(99)99999-9999'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm(e)}
                name="celular"
                required
              />
            </div>
            <input
              type="email"
              className={`w-full rounded border-2  px-4 py-2 text-lg ${
                error === true
                  ? 'border-red-500 focus:outline-red-500'
                  : 'border-slate-400'
              }`}
              placeholder="E-mail"
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm(e)}
              onKeyUp={handleChange}
              name="email"
              required
            />
            <div className="flex gap-4">
              <InputMask
                type="text"
                className="w-2/5 rounded border-2 border-slate-400 px-4 py-2 text-lg"
                placeholder="CEP"
                mask={'99999-999'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm(e)}
                name="cep"
                required
              />
              <input
                type="text"
                className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
                placeholder="Endereço"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm(e)}
                name="endereco"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
                placeholder="Cidade"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm(e)}
                name="cidade"
              />
              <input
                type="text"
                className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
                placeholder="Estado"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm(e)}
                name="estado"
              />
            </div>
          </form>
        </div>
        <div className="w-full min-h-[38vh] flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Imagem
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Nome
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Qtd
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Preço
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {movies.map((movie: any) => {
                        return (
                          <tr className="border-b" key={movie.id}>
                            <td className="whitespace-nowrap text-sm font-medium text-gray-900">
                              <img
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt=""
                                className="w-20 aspect-video object-contain"
                              />
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <p className="truncate ">{movie.title}</p>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex gap-3">
                              <p>1</p>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <p className="font-bold">
                                {new Intl.NumberFormat('pt-BR', {
                                  style: 'currency',
                                  currency: 'BRL',
                                }).format(parseFloat(movie.popularity) / 100)}
                              </p>
                            </td>
                            <td>
                              <Trash
                                size={20}
                                weight="fill"
                                className="hover:text-red-500 cursor-pointer"
                                onClick={() => removeOne(movie.id)}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xl">Total:</p>
              <p className="text-2xl font-semibold">
                {movies.map((price) => {
                  {
                    total = total + parseFloat(price.popularity) / 100;
                  }
                  return <></>;
                })}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(total)}
              </p>
            </div>
            <button
              type="button"
              className="px-6
          py-2.5
          bg-indigo-700
          hover:bg-indigo-500
          text-white
          font-bold
          text-lg
          w-full
          leading-tight
          transition
          duration-150 ease-in-out
          rounded
          disabled:bg-indigo-400
          
          "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              disabled={!validForm}
              onClick={clearChartMovies}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none ">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Obrigado {form.nome}
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              Sua compra foi finalizada com sucesso!
            </div>
            <div className="modal-footer  w-full p-4 border-t border-gray-200 rounded-b-md">
              <Link to="/">
                <button
                  type="button"
                  className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      w-full"
                  data-bs-dismiss="modal"
                >
                  Ir para loja
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function shouldComponentUpdate() {
  throw new Error('Function not implemented.');
}
