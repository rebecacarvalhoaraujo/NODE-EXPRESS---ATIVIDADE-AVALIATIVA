app.get('/alunos', (req, res) => {
    let resultado = alunos.alunos;
    
    if (req.query.nome) {
        resultado = alunos.filtrarPorNome(req.query.nome);
    }
    
    if (req.query.media) {
        resultado = alunos.filtrarPorMedia(req.query.media);
    }
    
    res.send(resultado);
});

app.post('/alunos/novo', (req, res) => {
    const { nome, matricula, media } = req.body;

    if (!nome || !matricula || !media) {
        res.status(400).send('Campos obrigatórios não informados');
        return;
    }

    alunos.alunos.push({ nome, matricula, media });
    fs.writeFileSync('./db.json', JSON.stringify(alunos.alunos));

    res.send('Aluno adicionado com sucesso');
});

app.delete('/alunos/:index', (req, res) => {
    const index = req.params.index;

    if (index < 0 || index >= alunos.alunos.length) {
        res.status(404).send('Aluno não encontrado');
        return;
    }

    alunos.alunos.splice(index, 1);
    fs.writeFileSync('./db.json', JSON.stringify(alunos.alunos));

    res.send('Aluno removido com sucesso');
});

app.put('/alunos/:index', (req, res) => {
    const index = req.params.index;

    if (index < 0 || index >= alunos.alunos.length) {
        res.status(404).send('Aluno não encontrado');
        return;
    }

    const { nome, media } = req.body;

    if (!nome || !media) {
        res.status(400).send('Campos obrigatórios não informados');
        return;
    }

    alunos.alunos[index].nome = nome;
    alunos.alunos[index].media = media;
    fs.writeFileSync('./db.json', JSON.stringify(alunos.alunos));

    res.send('Aluno atualizado com sucesso');
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});
