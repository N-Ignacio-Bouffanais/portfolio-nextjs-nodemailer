const express = require('express');
const app = express();
const port = 4000;
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log("Escuchando en el puerto 4000, :) todo OK!");
});