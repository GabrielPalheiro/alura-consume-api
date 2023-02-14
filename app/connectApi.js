//criando conexão com API

async function apiConnection() {
  const connection = await fetch("http://localhost:3000/videos");
  const convertedConnection = await connection.json();
  return convertedConnection;
}

async function createVideoConnection(title, description, url, image) {
  const connection = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: title,
      descricao: `${description} mil visualizações`,
      url: url,
      imagem: image,
    }),
  });
  if (!connection.ok) {
    throw new Error("Não foi possível enviar o vídeo");
  }
  const convertedConnection = await connection.json();
  return convertedConnection;
}

async function searchVideo(searching) {
  const connection = await fetch(`http://localhost:3000/videos?q=${searching}`);
  const convertedConnection = await connection.json();
  return convertedConnection;
}

export const connectApi = {
  apiConnection,
  createVideoConnection,
  searchVideo,
};
