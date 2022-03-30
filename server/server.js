const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: '../.env_local'});

const PORT = process.env.PORT || '3000';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.get('/', (request, response) => {
    //response.status(200).json({name: 'maria', idade: '23', doing: 'coding'});
    response.status(200).send("calcnode/:id");
})

const calcnodeRouter = require('./routes/calcnode');
app.use('/calcnode', calcnodeRouter);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})