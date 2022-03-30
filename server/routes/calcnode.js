const express = require('express');
const { route } = require('express/lib/application');
const pool = require('../helpers/database');

const router = express.Router();


router.get('/', async function(req, res){
    
    try{
        const sqlQuery = `SELECT * FROM calculadora.calcnode LIMIT 1000`;
        
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);

    } catch(e){
        res.status(400).send(e.message);
    }
})

router.get('/:id', async function(req, res){
    
    try{
        const sqlQuery = `SELECT * FROM calculadora.calcnode WHERE ID = ${req.params.id} LIMIT 1000`;
        
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);

    } catch(e){
        res.status(400).send(e.message);
    }
})

module.exports = router;