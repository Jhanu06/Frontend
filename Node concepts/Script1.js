// TOPICS: exports concept , file modules-read,write,append,delete,rename a file,RESTAPI,QUERY STRING and PATH PARAMS,


// exporting as module.exports={values to export} and importing using require() in other file

// function test()
// {
//     console.log("test")
// }
// function sum(a,b)
// {
//     console.log(a+b)
// }
// // sum(1,2);
// // test()
// function sub(a,b)
// {
//     console.log(a-b)
// }
// // anthy test aney function verey file lo access chesukovachuuu

// // i want to use a variable also
// let a="jhanu"
// // objects kuda use cheyochu
// let student={
//     name:"jhanu",
//     age:20
// }
// module.exports={
//     test,sum,a,student
// }
// // we can also exports as 
// module.exports.branch="cse"


// 1. how to read a file content -ASYNC AND SYNC 

// async func
// let fs=require('fs')
// fs.readFile('./topic.txt',(err,data)=>{
//     if(err)
//     {
//         console.log("file not found")
//     }
//     else{
//         console.log(data.toString())
//     }
// })
// console.log("before reading")

// sync func
// let fs=require('fs')
// let data=fs.readFileSync('./topics.txt') // reading file
// console.log(data.toString())
// console.log("before reading")

// 2. how to write a file content

// let fs=require('fs')
// //let data=fs.writeFile('./topics.txt',"updating the file content",(err)=>{
//     // topics.txt echam paina ekkda unna datalo change chestadi
// let data=fs.writeFile('./topic.txt',"updating the file content",(err)=>{
//     // ekkada topic anedi echam asala e file ey ledh kani edi create chesi file akkda data ni pedatadi
//     if(err)
//     {
//         console.log("file not found")
//     }
//     else{
//         console.log("data")
//     }
// })
// console.log("before reading")

// 3. how to append a file

// i also creates a new file if not there
// let fs=require('fs')
// let data=fs.appendFile('./topic.txt',"adding a new content to the existing one!",(err)=>{
//     if(err)
//     {
//         console.log("file not found")
//     }
//     else{
//         console.log("data")
//     }
// })
// console.log("before reading")


// 4. how to delete a file

// let fs=require('fs')
// let data=fs.unlink('./topics.txt',(err)=>{
//     if(err)
//     {
//         console.log("file not found")
//     }
//     else{
//         console.log("data")
//     }
// })
// console.log("before reading")

// 5. to create a folder

// let fs=require('fs') // testing folder is created if exists it shows error
// let data=fs.mkdir('./testing.txt',(err)=>{ // sub folder kuda - './Script/test
//     if(err)
//     {
//         console.log("file not found")
//     }
//     else{
//         console.log("data")
//     }
// })
// console.log("before reading")
// to delete any subfolder or folder use rmdir inplace of mkdir
// const fs = require('fs');
// // fs.mkdirSync('./folder.txt');
// fs.rmdirSync('./testing.txt') // deleted if its empty 

// to show the details of data

// const fs = require('fs');

// // Read main folder
// fs.readdir('./folder.txt', (err, data) => {
//   if (err) {
//     console.log("folder.txt not found");
//   } else {
//     console.log("Contents of folder.txt:", data);

//     // Loop through each item in folder.txt
//     data.forEach((fileOrFolder) => {
//       const fullPath = './folder.txt/' + fileOrFolder;

//       // Check if it's a file or folder
//       fs.stat(fullPath, (err, stats) => {
//         if (err) {
//           console.log("Error reading:", fullPath);
//         } else if (stats.isDirectory()) {
//           console.log(`📁 '${fileOrFolder}' is a folder.`);

//           // Read subfolder contents
//           fs.readdir(fullPath, (err, subData) => {
//             if (err) {
//               console.log(`Error reading subfolder ${fileOrFolder}`);
//             } else {
//               console.log(`Contents of subfolder '${fileOrFolder}':`, subData);
//             }
//           });
//         } else {
//           console.log(`📄 '${fileOrFolder}' is a file.`);
//         }
//       });
//     });
//   }
// });

// RestAPI - we r using express.js framework

// const express = require("express");
// const app = express();
// app.listen(3000, () => {
//   console.log("server started");
// }); // e 4500 aney port num daggara server run avudi

// // get method
// app.get("/hello", (request, response) => {
//   console.log("GET / endpoint hit"); // epudaithy a server lo kinda msg run avudo apudu terminal lo e msg chupistadi
//  // response.send("received get request");
//  // response.sendFile(__dirname+'/index.html')
//  response.send(`
//     <ol>
//     <li>list1</li>
//     <li>list2</li>
//     <li><h>hello world</h></li>
//     </ol>
// `)
// }); // manam vachina req bati response em evalo chudali
// // post method
// app.post("/hel", (request, response) => {
//   console.log("POST / endpoint hit");
//  response.send("received post request");
// });
// // put method
// app.put("/hello", (request, response) => {
//   console.log("PUT / endpoint hit");
//   response.send("received put request");
// });
// // delete method
// app.delete("/hlo", (request, response) => {
//   console.log("DELETE / endpoint hit");
//   response.send("received delete request");
// });

// QUERY STRING

// const express = require("express");
// const app = express();
// query={
//     id:3,
//     city:"hyd"
// }
// params={
//   city:"",
// }
// app.listen(4600, () => {
//   console.log("server started");
// });
// query string
// app.get("/", function (req, res) {
//   console.log("GET method done");
//  // res.send("hello");
//  if(req.query.city)
//  {
//     res.send(`welcome to ${req.query.city}`)
//  }
//  else{
//   res.send("welcome to world")
//  }
// });

// path parameters-port no/:ekkada emaina ravachu and we use params
// app.get("/:city", function (req, res) {
//   console.log("GET method done");
//  if(req.params.city)
//  {
//   // manam a port tharvata a variable or text esthamoo adi vastadi manaki
//     res.send(`welcome to ${req.params.city}`)
//  }
// });
