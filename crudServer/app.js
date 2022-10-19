const express = require('express');
const app = express();
var mysql = require('mysql');
var cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
var conn = mysql.createConnection({ 
  host: "localhost",
  user: "root",
  password: "Kunal@123",
  database: "crud"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS details (id int, firstname VARCHAR(255), lastname VARCHAR(255))";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created")
  });
});
// app.get('/details',(req, res) => {
//     let sqlQuery = "SELECT * FROM details";
    
//     let query = conn.query(sqlQuery, (err, results) => {
//       if(err) throw err;
//       res.send(results);
//     });
//   });


  // app.get('/details1',(req, res) => {
  //   let sqlQuery = "SELECT * FROM details WHERE id=" + req.query.id;
      
  //   let query = conn.query(sqlQuery, (err, results) => {
  //     if(err) throw err;
  //     res.send(results);
  //   });
  // });
  

app.post('/details',(req, res) => {
  // let data = {Applicaton_id: req.body.Applicaton_id, User_id: req.body.User_id};
  id = req.body.id,
  firstname = req.body.firstname,
  lastname = req.body.lastname
  let sqlQuery = "INSERT INTO `details` (id,firstname, lastname) VALUES (?,?,?)";
  
  let query = conn.query(sqlQuery, [id,firstname,lastname],(err,results) => {
    if(err) throw err;
    res.send(results);
  });console.log("query",query)
});

// app.put('/details',(req, res) => {
  
//   let sqlQuery = "UPDATE details SET firstname='"+req.body.firstname+"', lastname='"+req.body.lastname+"' WHERE id="+req.body.id;

//   let query = conn.query(sqlQuery,(err, results) => {
//     if(err) throw err;
//     res.send(results);
//   });console.log("query",query)
// });

// app.delete('/details',(req, res) => {
//   let sqlQuery = "DELETE FROM details WHERE id="+req.query.id+"";
    
//   let query = conn.query(sqlQuery, (err, results) => {
//     if(err) throw err;
//       res.send(results);
//   });
// });


app.listen(3000,() =>{
    console.log('Server started on port 3000...');
  });