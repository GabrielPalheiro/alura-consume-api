import { connectApi } from "./connectApi.js"; //importa variavel com varias funções
import buildCard from "./showVideos.js"; //importa somente a função

async function searchForVideo(event) {
  event.preventDefault();

  const searchData = document.querySelector("[data-search]").value;
  const search = await connectApi.searchVideo(searchData);
  const list = document.querySelector("[data-list]");

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  search.forEach((element) =>
    list.appendChild(
      buildCard(element.titulo, element.descricao, element.imagem, element.url)
    )
  );
}

const searchButton = document.querySelector("[data-search-button]");

searchButton.addEventListener("click", (event) => searchForVideo(event));
