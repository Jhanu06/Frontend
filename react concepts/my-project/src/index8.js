// Topics : bootstrap installation , form handling , API Integration,lazy loading

import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// bootstrap - css framework we can install them using package manager or cdn links in bootstrap website
// we must include cdn link in index.html main page
// in todo app we use bootstrap by installing package - npm install bootstrap and we import "" in file
// path-> bootstrap/dist/css/bootstrap.min.css - if this file is kept in css we use @import url('path') or in js we use import 'path

// form handling

// 1.controlled - using Usesate
import "bootstrap/dist/css/bootstrap.min.css";
// function App() {
//   const [email, updateemail] = useState("");
//   const [password, updatepassword] = useState("");

//   return (
//     <>
//       <div className="border rounded p-4 mt-5 mx-auto" style={{ width: "350px" }}>
//         <h2 className="text-primary text-center mb-4">Login Form</h2>

//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="form-control"
//             value={email}
//             onChange={(e) => updateemail(e.target.value)}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="form-control"
//             value={password}
//             onChange={(e) => updatepassword(e.target.value)}
//           />
//         </div>

//         <button
//           className="btn btn-primary w-100"
//           onClick={() => {
//             console.log("Email: " + email);
//             console.log("Password: " + password);
//           }}
//         >
//           Submit
//         </button>
//       </div>
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// 2.uncontrolled - using useRef()
// function App() {

//   const [email, updateemail] = useState("");
//   // const [password, updatepassword] = useState("");
//   const pass=useRef();

//   return (
//     <>
//       <div className="border rounded p-4 mt-5 mx-auto" style={{ width: "350px" }}>
//         <h2 className="text-primary text-center mb-4">Login Form</h2>

//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="form-control"
//             value={email}
//             onChange={(e) => updateemail(e.target.value)}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="form-control"
//             ref={pass}

//           />
//         </div>

//         <button
//           className="btn btn-primary w-100"
//           onClick={() => {
//             console.log("Email: ", email);
//             console.log("Password: " ,pass);
//             // but ekkada console lo ela esthy password obj la chupistundi so manam
//              console.log("Password: " ,pass.current.value);
//           }}
//         >
//           Submit
//         </button>
//       </div>
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// error handling in form

// function App() {

//   const [email, updateemail] = useState("");
//   const [password, updatepassword] = useState("");

// const [error,seterror]=useState({
//   // email:"enter mail", // epudu em enter cheyaka pothy akkda ala kanipistadi red ga
//   // password:"enter password"
//   email:"",
//   password:""
//   // ipudu ekkada empty ga uncham anthy handlesubmit anedi enter chesaka error show chestadi

// }
//   );
// let pattern=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

// function handlesubmit(){
// if(email.trim()==="")
// {
//   seterror((error)=>({...error,email:"enter email"}));
// }
// else if(!pattern.test(email))
// {
//  seterror((error)=>({...error,email:"enter valid email"}));
// }
// else{
//   seterror((error)=>({...error,email:""}))
// }

// if(password.trim()==="")
// {
//   seterror((error)=>({...error,password:"enter password"}));
// }
// else if(password.trim().length<8)
// {
//  seterror((error)=>({...error,password:"enter valid password with max 8"}));
// }
// else{
//   seterror((error)=>({...error,password:""}))
// }

// }

//   return (
//     <>
//       <div className="border rounded p-4 mt-5 mx-auto" style={{ width: "350px" }}>
//         <h2 className="text-primary text-center mb-4">Login Form</h2>

//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="form-control"
//             value={email}
//             onChange={(e) => updateemail(e.target.value)}
//           />
//           {
//             error.email&&<span className="text-danger">{error.email}</span>
//             // e && opr mundu di true iyinapudy next span lo di avudi

//           }
//         </div>

//         <div className="mb-4">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="form-control"
//             value={password}
//             onChange={(e) => updatepassword(e.target.value)}
//           />
//           {error.password&&<span className="text-danger">{error.password}</span>}
//         </div>

//         <button
//           className="btn btn-primary w-100"
//           onClick={handlesubmit}
//         >
//           Submit
//         </button>
//       </div>
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// API Integration

// 1.fetch : used in products fetching using api -once refer that code

// function App() {
//   const [users, setUsers] = useState([]);

//   // async function with fetch
//   const getUsers = async () => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await response.json();
//       setUsers(data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   useEffect(() => {
//     getUsers(); // call on component mount
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="text-success">Users List</h2>
//       {users.map((user) => (
//         <p key={user.id}>
//           {user.name} - {user.email}
//         </p>
//       ))}
//     </div>
//   );
// }
//  ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// 2. AXIOS

// mundu fetch use chesinapudu objects form chupisthadi danini malla json lo convert cheyali
// but axios use cheyadam valla return iyindi object lane vachindi andulo data anna dantlo manaki kavalsindi undi
// import axios from "axios";

// function App() {
//   const [users, setUsers] = useState([]);

//   // async function with axios
//   const getUsers = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//       //await axios.post("https://jsonplaceholder.typicode.com/users",{ekkada data emaina evachu post cheyalsindi});
//       //await axios.put("https://jsonplaceholder.typicode.com/users/10-anthy ekkada unna data ni modify chestam put vadali");
//       // not only get we use put,delete anything

//       // in website npm axios we can drct func to get,post
//       setUsers(response.data); // anduke ekkada .data ani echam

//       // we can also use as to dd or modify anything
//       // let api=axios.create({baseurl:'https://jsonplaceholder.typicode.com'})
//       // const response = await api.get('/users/10') // ekkada estham

//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="text-primary">Users List (axios + async/await)</h2>
//       {users.map((user) => (
//         <p key={user.id}>
//           {user.name} - {user.email}
//         </p>
//       ))}
//     </div>
//   );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

// lazy loading

// with conditional rendering

// import { lazy, Suspense} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";

// const Form = lazy(() => import('./Form'));

// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <div className="text-center mt-4">
//         <h1>Lazy Loading in React</h1>
//         <button
//           className="btn btn-primary"
//           onClick={() => {setShow(true)
//             console.log(show);}
//           }
//         >
//           Click
//         </button>
//       </div>

//       {show==true && (
// here fall back anthy ekuva data undi load avali ga so user ki loading aney text chupistadi okavela late avuthy
//         <Suspense fallback={<div className="text-center mt-3">Loading Form...</div>}>
//           <Form />
//         </Suspense>
//       )}
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// using routing

// import { lazy, Suspense } from "react";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// // import Home from './Home'
// // import Login from './Login'
// // import About from './About'
// // import Contact from './Contact'
// import "./index.css";
// // when we r using lazy loading we need not to take imports
// const Home = lazy(() => import('./Home'));
// const Login = lazy(() => import('./Login'));
// const About = lazy(() => import('./About'));
// const Contact = lazy(() => import('./Contact'));

// function Header() {
//   return (
//     <ul className="nav justify-content-center bg-light p-3">
//       <li className="nav-item mx-2">
//         <Link className="nav-link" to="/Home">Home</Link>
//       </li>
//       <li className="nav-item mx-2">
//         <Link className="nav-link" to="/Login">Login</Link>
//       </li>
//       <li className="nav-item mx-2">
//         <Link className="nav-link" to="/About">About Us</Link>
//       </li>
//       <li className="nav-item mx-2">
//         <Link className="nav-link" to="/Contact">Contact</Link>
//       </li>
//     </ul>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Suspense fallback={<div className="text-center mt-5">Loading page...</div>}>
//         <Routes>
//           <Route path="/Home" element={<Home />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
