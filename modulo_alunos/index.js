const express = require("express");
const app = express();
const alunos = require("./alunos");

// Rota GET para listar todos os alunos
app.get("/alunos", (req, res) => {
  let resultado = alunos.alunos;
  const nome = req.query.nome;
  const media = req.query.media;

  if (nome) {
    resultado = alunos.filtrarPorNome(nome);
  }

  if (media) {
    resultado = alunos.filtrarPorMedia(media);
  }

  res.send(resultado);
});

// Rota POST para adicionar um novo aluno
app.post("/alunos/novo", (req, res) => {
  const novoAluno = req.body;

  if (!novoAluno || !novoAluno.nome || !novoAluno.matricula || !novoAluno.media) {
    res.status(400).send("Nome, matrícula e média são obrigatórios");
    return;
  }

  alunos.alunos.push(novoAluno);
  res.send("Aluno adicionado com sucesso");
});


// Rota POST para deletar um aluno existente
app.post("/alunos/deletar/:index", (req, res) => {
  const index = req.params.index;

  if (index < 0 || index >= alunos.alunos.length) {
    res.status(404).send("Aluno não encontrado");
    return;
  }

  alunos.alunos.splice(index, 1);
  res.send("Aluno removido com sucesso");
});

// Rota POST para atualizar um aluno existente
app.post("/alunos/atualizar/:index", (req, res) => {
  const index = req.params.index;
  const alunoAtualizado = req.body;

  if (!alunos.alunos[index]) {
    res.status(404).send("Aluno não encontrado");
    return;
  }

  if (alunoAtualizado.nome) {
    alunos.alunos[index].nome = alunoAtualizado.nome;
  }

  if (alunoAtualizado.media) {
    alunos.alunos[index].media = alunoAtualizado.media;
  }

  res.send("Aluno atualizado com sucesso");
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

  // Inicializa a escuta de requisições do servidor

