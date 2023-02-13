//criando conexão com API

async function apiConnection() {
  const connection = await fetch("http://localhost:3000/videos");
  const convertedConnection = await connection.json();
  return convertedConnection;
}

export const connectApi = {
  apiConnection,
};
