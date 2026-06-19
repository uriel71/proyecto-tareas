const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Ruta principal (health check para Render)
app.get("/", (req, res) => {
  res.send("API de tareas funcionando");
});

// Datos de tareas (simulando base de datos)
const tareas = [
  {
    id: 1,
    titulo: "Relación HTTP y MySQL / cURL",
    url: "https://lh3.googleusercontent.com/drive-storage/..."
  },
  {
    id: 2,
    titulo: "Juego de dados",
    url: "https://docs.google.com/document/d/..."
  },
  {
    id: 3,
    titulo: "Tablas de multiplicar",
    url: "https://docs.google.com/document/d/..."
  }
];

// Endpoint GET
app.get("/tareas", (req, res) => {
  res.json(tareas);
});

// Puerto de Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});