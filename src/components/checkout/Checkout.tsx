import { Link, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

export function Checkout() {
  let navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <h2 className="text-5xl font-medium mb-12 mt-6">Finalizar Compra</h2>

      <div className="flex container justify-between mx-auto gap-48">
        <div className="w-full">
          <form action="" className="flex flex-col gap-8">
            <input
              type="text"
              className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
              placeholder="Nome Completo"
            />
            <div className="flex gap-4">
              <InputMask
                type="text"
                className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
                placeholder="CPF"
                mask={'999.999.999-99'}
              />
              <InputMask
                type="text"
                className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
                placeholder="Celular"
                mask={'(99)99999-9999'}
              />
            </div>
            <input
              type="text"
              className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
              placeholder="E-mail"
            />
            <div className="flex gap-4">
              <InputMask
                type="text"
                className="w-2/5 rounded border-2 border-slate-400 px-4 py-2 text-lg"
                placeholder="CEP"
                mask={'99999-999'}
              />
              <input
                type="text"
                className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
                placeholder="Endereço"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
                placeholder="Cidade"
              />
              <input
                type="text"
                className="w-full rounded border-2 border-slate-400 px-4 py-2 text-lg"
                placeholder="Estado"
              />
            </div>
          </form>
        </div>
        <div className="w-full min-h-[38vh] flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
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
                      <tr className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Mark
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Otto
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @mdo
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          2
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Jacob
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Thornton
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @fat
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          3
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Larry
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Wild
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
      rounded"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Finalizar compra
          </button>
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
                Obrigado Nome de Usuario
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
