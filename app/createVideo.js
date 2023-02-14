import { connectApi } from "./connectApi.js";

const form = document.querySelector("[data-form]");

async function createVideo(event) {
  event.preventDefault();

  const title = document.querySelector("[data-title]").value;
  const description = Math.floor(Math.random() * 10).toString();
  const url = document.querySelector("[data-url]").value;
  const image = document.querySelector("[data-image]").value;
  try {
    await connectApi.createVideoConnection(title, description, url, image);

    window.location.href = "../pages/envio-concluido.html"; //aqui você coloca a página para se der certo
  } catch (ex) {
    alert(ex);
  }
}

form.addEventListener("submit", (event) => createVideo(event));
