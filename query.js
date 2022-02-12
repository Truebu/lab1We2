const express = require("express");
const mysql = require("mysql");
const app = express();

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'management'
});

conection.connect((err)=>{
    if(err) throw err;
    console.log('Success connection');
});

app.set('views',`${__dirname}/views`);

app.set('view engine', 'pug');

app.get('/', function(req, resp){
    conection.query('select * from user', (err, rows)=>{
        if(err) throw err;
        resp.render('index',{
           rows 
        });
        conection.end();
    });
});

app.listen(1337);
