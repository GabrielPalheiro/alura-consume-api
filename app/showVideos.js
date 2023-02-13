import { connectApi } from "./connectApi.js";

const list = document.querySelector("[data-list]");

function buildCard(title, description, image, url) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = ` 
    <iframe width="100%" height="72%" src="${url}"
    title="${title}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
    <img src="${image}" alt="logo canal alura">
    <h3>${title}</h3>
    <p>${description}</p>
    </div>`;
  return video;
}

//acessando o retorno da função que conecta na API
async function listVideo() {
  const APIList = await connectApi.apiConnection();
  APIList.forEach((element) =>
    list.appendChild(
      buildCard(element.titulo, element.descricao, element.imagem, element.url)
    )
  );
}

listVideo();
