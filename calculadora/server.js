var mariadb = require('mariadb');
var http = require('http');
var fs = require('fs');
const express = require('express');

const app = express();

const dotenv = require('dotenv');

dotenv.config({path: '.env_local'});

const PORT=8080;

const content = fs.readFileSync('./Index.html', 'utf8');


var pool = mariadb.createPool({
    host:'localhost',
    user:'root',
    password:'henrique',
    database:'calculadora'
})

async function main(val) {
    try{
        let conn = await pool.getConnection();
        let rows = await conn.query(`INSERT INTO calcnode (conta, resultado) VALUES ('${val}', '${eval(val)}')`);
        console.log(rows);
    } catch(e){
        console.log(e.message);
    }
}

http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(content);
    response.end();

    
    request.on('data', function(data) {
        const [ , dado] = data.toString().split('=');
        //console.log(decodeURI(dado).replace('%2F', '/'));
        main(decodeURI(dado).replace('%2F', '/'));  
    })

}).listen(PORT);


