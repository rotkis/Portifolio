var http = require('http');
var express = require('express');
var app = express();
app.use(express.static('./public'));
var server = http.createServer(app);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.set('views', './views');
server.listen(80);
console.log("servidor rodando...");
app.post('/cadastra', function(req, res){
    var nome = req.body.nome;
    var senha = req.body.senha;
    res.render('resposta', {resposta: "Usuario cadastrado com sucesso!"});
});
app.post('/login', function(req, res){
    var nome = req.body.name;
    var senha = req.body.password;
    if (err){
        res.render('response', {resposta: "Erro ao fazer o login do usuario"}) //Resposta que vai ser renderizada caso de erro
    }
    else{
        res.render('resposta', {resposta: "Usuario logado com sucesso!"}) //Resposta que vai ser renderizada caso de certo
    };
})