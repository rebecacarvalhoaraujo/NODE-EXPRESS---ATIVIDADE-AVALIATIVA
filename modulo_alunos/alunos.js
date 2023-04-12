const alunos = [
    { nome: 'João', matricula: '123', media: 8 },
    { nome: 'Maria', matricula: '456', media: 7 },
    { nome: 'Pedro', matricula: '789', media: 9 },
    ];
    
    function filtrarPorNome(nome) {
    return alunos.filter(aluno => aluno.nome.includes(nome));
    }
    
    function filtrarPorMedia(media) {
    return alunos.filter(aluno => aluno.media >= media);
    }
    
    module.exports = {
    alunos,
    filtrarPorNome,
    filtrarPorMedia,
    };