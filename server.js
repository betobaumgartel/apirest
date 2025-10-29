const express = require("express");
const app = express();
const produtosRoutes = require("./routes/produtosRoutes");

app.use(express.json());
app.use("/produtos", produtosRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});