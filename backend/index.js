const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Coloque aqui sua URI real:
const mongoURI =
  "mongodb+srv://USER:PASSWORD@traintrack-teste.moymcbx.mongodb.net/?retryWrites=true&w=majority&appName=traintrack-teste";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado ao MongoDB Atlas!"))
  .catch((err) => console.error("❌ Erro na conexão:", err));

app.get("/", (req, res) => {
  res.send("API funcionando com MongoDB Atlas!");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});