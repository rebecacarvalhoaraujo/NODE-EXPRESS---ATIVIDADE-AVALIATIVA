const alunos = [
    { nome: "João", matricula: "1234", media: 8.5 },
    { nome: "Maria", matricula: "5678", media: 7.0 },
    { nome: "Pedro", matricula: "91011", media: 9.0 },
  ];
  
  function filtrarPorNome(nome) {
    return alunos.filter((aluno) => aluno.nome === nome);
  }
  
  function filtrarPorMedia(media) {
    return alunos.filter((aluno) => aluno.media >= media);
  }
  
  module.exports = {
    alunos,
    filtrarPorNome,
    filtrarPorMedia,
  };
  