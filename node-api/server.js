const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//Iniciando com o app.
const app = express();


//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true,useUnifiedTopology: true });


requireDir('./src/models');

const Product = mongoose.model('Product');

//Primeira Rota
app.get('/',(req,res)=>{
    //req: simboliza a requisição ao servidor.(parâmetros,corpo da requisição,cabeçalhos,autenticação, etc...).
    //res: resposta ao usuário.

    Product.create({
        title: "React Native",
        description: "Build app mobile with React",
        url: "https://github.com/facebook/react-native",
    });

    return res.send('Hello Jesus');
});


app.listen(3001);