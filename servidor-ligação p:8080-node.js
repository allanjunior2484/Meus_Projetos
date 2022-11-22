const express = require('express');
const app = express();
const path = require ('path');
const router = express.Router();

const db = require('./models/db');

app.get("/", async(req,res)=> {
    res.send("Página inicial");
})

app.get("/cadastrar", async(req,res)=> {
    res.send("Página cadastrar");
})

app.listen(8080,() => {
    console.log("servidor iniciado na porta 8080: https://localhost:8080");
})
