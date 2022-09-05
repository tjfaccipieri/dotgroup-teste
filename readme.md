<h1 align="center">💻 DotGroup - Loja de filmes</h1>

## :memo: Descrição
Projeto realizado para o teste técnico da DotGroup, feito com React + Vite, utilizando a API do [TMDB](https://developers.themoviedb.org/4/getting-started/authorization) (The Movie Database), para gerar o consumo dos principais filmes do catalogo em forma de e-commerce

## :books: Funcionalidades
O projeto conta com o consumo da API do TMDB, para trazer a lista de filmes populares, em formato de cards para um e-commerce, com função de adicionar o filme a lista de favoritos, ou de colocar no carrinho, ambos abrindo com uma barra lateral para a visualização do usuário, e carrinho com indicador de quantidade de produtos inseridas diretamente na navbar sempre ativa.
Barra de pesquisa funcional, filtrando a lista de filmes disponíveis na loja.
Toastr de aviso de item adicionado a lista de favoritos e ao carrinho, para confirmação visual do usuário.
Tela de checkout com formulário de compra, com validação de campos, mascaras de preenchimento, e botão ativável apenas após o correto preenchimento do formulário
Valor total da compra do usuário nas telas de carrinho lateral e de checkout, com a opção de remover um ou todos os filmes.

## :wrench: Tecnologias utilizadas
* React + Typescript; 
* Vite;
* Axios;
* TailwindCSS;
* PhosphorIcons;
* React-Toastify
* React-Router-Dom

## :rocket: Rodando o projeto
Para rodar o repositório é necessário seguir os seguintes passos:
- 
Clonando o projeto:
```
git clone https://github.com/tjfaccipieri/dotgroup-teste.git
```
Abrir a pasta do projeto dentro do VSCode, ou de algum terminal de comandos, como CMD ou BASH;
Instalar as dependências do projeto com:
```
npm install
```
Rodar o projeto localmente com:
```
npm run dev
```

### Para verificar o resultado final, sem acesso ao código, pode ser usado o link abaixo:
[projeto online](https://thiago-dotgroup.netlify.app/)

## :soon: Implementação futura
* Criar a paginação de itens, e consumir outras rotas de acesso da API, como filmes por categoria;
* Criar página de detalhes do filme, com informações mais detalhadas oferecidas pela API.

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tjfaccipieri">
        <img src="https://github.com/tjfaccipieri.png" width="100px;" alt="Foto do criador do conteudo"/><br>
        <sub>
          <b>Thiago Faccipieri</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto
Em desenvolvimento. **Versão MVP 1.0**