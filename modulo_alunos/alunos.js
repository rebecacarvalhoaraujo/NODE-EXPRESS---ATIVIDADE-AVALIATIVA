const fs = require('fs');

const alunos = [
  { nome: "João", matricula: "1234", media: 8.5 },
  { nome: "Maria", matricula: "5678", media: 7.0 },
  { nome: "Pedro", matricula: "91011", media: 9.0 },
];

function atualizarDbJson(alunos) {
  fs.writeFileSync('db.json', JSON.stringify(alunos));
}

function filtrarPorNome(nome) {
  const alunosFiltrados = alunos.filter((aluno) => aluno.nome === nome);
  if (alunosFiltrados.length !== alunos.length) {
    atualizarDbJson(alunosFiltrados);
  }
  return alunosFiltrados;
}

function filtrarPorMedia(media) {
  const alunosFiltrados = alunos.filter((aluno) => aluno.media >= media);
  if (alunosFiltrados.length !== alunos.length) {
    atualizarDbJson(alunosFiltrados);
  }
  return alunosFiltrados;
}

module.exports = {
  alunos,
  filtrarPorNome,
  filtrarPorMedia,
  atualizarDbJson,
};

  