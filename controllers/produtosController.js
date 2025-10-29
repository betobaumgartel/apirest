const conexao = require("../db/conexao");

// LISTAR TODOS
exports.listar = (req, res) => {
  conexao.query("SELECT * FROM produtos", (err, resultados) => {
    if (err) return res.status(500).send("Erro ao buscar produtos");
    res.json(resultados);
  });
};

// BUSCAR POR ID
exports.buscarPorId = (req, res) => {
  const id = req.params.id;
  conexao.query("SELECT * FROM produtos WHERE id = ?", [id], (err, resultados) => {
    if (err) return res.status(500).send("Erro ao buscar produto");
    if (resultados.length === 0) return res.status(404).send("Produto não encontrado");
    res.json(resultados[0]);
  });
};

// INSERIR NOVO
exports.criar = (req, res) => {
  const { nome, preco } = req.body;
  conexao.query("INSERT INTO produtos (nome, preco) VALUES (?, ?)", [nome, preco], (err, resultado) => {
    if (err) return res.status(500).send("Erro ao adicionar produto");
    res.status(201).json({ id: resultado.insertId, nome, preco });
  });
};

// ATUALIZAR
exports.atualizar = (req, res) => {
  const id = req.params.id;
  const { nome, preco } = req.body;
  conexao.query("UPDATE produtos SET nome=?, preco=? WHERE id=?", [nome, preco, id], err => {
    if (err) return res.status(500).send("Erro ao atualizar produto");
    res.send("Produto atualizado com sucesso");
  });
};

// DELETAR
exports.deletar = (req, res) => {
  const id = req.params.id;
  conexao.query("DELETE FROM produtos WHERE id=?", [id], err => {
    if (err) return res.status(500).send("Erro ao excluir produto");
    res.send("Produto excluído com sucesso");
  });
};