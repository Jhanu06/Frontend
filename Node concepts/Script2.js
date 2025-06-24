// Topics: RESTAPI USING SQL AND NODE,nodemailer,static files,CORS and handling cors error in express

// RESTAPI USING MYSQL AND NODE JS
// importing db.js
// manam post chestunna akkda null chupistadi so manam middleware use chestam
// const db = require('./db');
// const express=require("express")
// const app=express()
// app.use(express.json()) //edi middleware antharu- ekkda data send chesthy null kakunda objs ni show chestadi
// // postman lo body lo raw lo estam
// app.listen(4000, () => {
//   console.log("server started at port 4000");
// });

// app.get('/test', (req, res) => {
//   db.getFamily()
//     .then((data) => res.send(data))
//     .catch(() => res.status(500).send("error"));
// });

// app.post('/test', (req, res) => {
//   const { name, year } = req.body;
//   db.addFamily(name, year)
//     .then((result) => res.send({ message: "Added successfully", insertId: result.insertId }))
//     .catch(() => res.status(500).send("error"));
// });

// app.put('/test', (req, res) => {
//   const { id, name, year } = req.body;
//   db.updateFamily(id, name, year)
//     .then(() => res.send({ message: "Updated successfully", updated: req.body }))
//     .catch(() => res.status(500).send("error"));
// });

// app.delete('/test/:id', (req, res) => {
//   const id = req.params.id;
//   db.deleteFamily(id)
//     .then(() => res.send({ message: `Deleted id ${id}` }))
//     .catch(() => res.status(500).send("error"));
// });

// nodemailer-sending emails

// var nm=require("nodemailer")
// const transporter = nm.createTransport(
//   {
//     host: "smtp.gmail.com", 
//     port: 587,
//     secure: false, // or 'STARTTLS'
//     auth: {
//       user: 'madugulajhanu06@gmail.com',
//       pass: 'kwuy dgsc qjaa bipz', // e paina email lo 2 ste verification on cheyali and app passwords loki veli
//       // app passwords name:jhansimadugula and adi okati create chestadi a adey pass lo peta
//     }
//   }
// )
// var options={
// from:'madugulajhanu06@gmail.com',
// to:'madugulajhansi6@gmail.com',
// subject:"testing node emails",
// //text:"hello!welcome to our application"
// html: `<h1>hello! using nodemailer</h1>
// <img src='cid:food' width='200px'></img>`,
// attachments:[
//   {
//     filename:'food.jpeg',
//     path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JdRkDXEdrRzYj4mDjFbLaerR4KvS9MyzzQ&s",
//     cid: 'food'
//   }
// ]

// }
// transporter.sendMail(options, (err, info) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

// static files

// const express=require("express")
// const app=express()
// app.listen(4000, () => {
//   console.log("server started at port 4000");
// });
// // we use middleware
// //app.use(express.static(__dirname+'/folder')) // dirname anedi current main folder ani ardam
// // another method 
// app.get('/api',(req,res)=>{
//   console.log("hello from server");
// })

// CORS and handling cors error in express

// var express = require('express');
// var app = express();
// var cors=require('cors')
// // app.use(cors(
// //   {
// //     'methods':'GET',
// //     'origin':"*",
    
// //   }
// // ));
// app.use(cors("*"))
// let users = [
//   {
//     "id": 1,
//     "name": "John",
//     "age": 30
//   },
//   {
//     "id": 2,
//     "name": "Alice",
//     "age": 25
//   },
//   {
//     "id": 3,
//     "name": "Bob",
//     "age": 35
//   }
// ];

// app.get('/', (req, res) => {
//   //res.setHeader('Access-Control-Allow-Origin', '*'); // ✔️ Corrected spelling
//   res.send(users);
// });
// app.listen(4000, () => {
//   console.log("server started at port 4000");
// });
