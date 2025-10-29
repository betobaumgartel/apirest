const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",      // altere conforme seu usuário
  password: "",      // se houver senha, adicione aqui
  database: "loja"
});

conexao.connect(err => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao banco de dados MySQL!");
});

module.exports = conexao;