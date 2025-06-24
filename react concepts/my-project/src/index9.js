// Topics : Higher order functions,prop types,Portals,CRUD OPERATIONS-are there in crud folder

import React from "react";
import ReactDOM from "react-dom/client";

//Higher order functions

// simple eg:
// function sum(n1,n2,fun){ // we r giving a func as a arguments
//     console.log(n1+n2);

// }
// sum(26,10,squares);

// function sum(n1,n2){
//     console.log(n1+n2);
//     return fun; // here we are returning a function
// }
// sum(10,26)
// function squares(n)
// {
//     console.log(n*n);
// }

// function User(props) {
//   return (
//     <div>
//       <h2>This is User component</h2>
//       <h2>username:{props.name}</h2>
//     </div>
//   );
// }
// function Login() {
//   return <div>This is Login component</div>;
// }
// function HigherOrderComponent(Component) {
//   // ekkada parameter a name iyina petukovachu
// // let a=false;
//   return (p) => {
//     if (Component=== User) {
//       return <User {...p}/>;
//     } // here we are returning a function-that fun is called wrapped function
//     else {
//       return <Login />;
//     }
//   };
// }
// const Comp = HigherOrderComponent(Login);
// function App() {
//   return (
//     <>
//       <Comp name="jhanu" />
//     </>
//   );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// prop types

// import PropTypes from "prop-types";

// function User(p)
// {
//     return (
//         <div>
//             <h2>This is User component</h2>
//             <h2>username: {p.name}</h2>
//             <h2>age: {p.age}</h2>
//             <h2>isActive: {p.isActive ? "true" : "false"}</h2>
//         </div>
//     );
// }
// // ekada string place lo number type ni pass chesam kani em error chupinchatle so
// // manam prop types ni use chesi type ni define chesukovachu

// User.propTypes={
//     name:PropTypes.string.isRequired, // isRequired means compulsory
//     age:PropTypes.number.isRequired,
//     isActive:PropTypes.bool.isRequired
// }
// function App()
// {
//     return (
//         <User name={'jhanu'} age={20} isActive={123}/> //error echam chupistadi
//         // <User name={'jhanu'} age={20} isActive={true}/> // correct
//         // epudu 2 wrong type esthy frst di error chupistadi
//     )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// prop types with default values
// function User(p)
// {
//     return (
//         <div>
//             <h2>This is User component</h2>
//             <h2>username: {p.name}</h2>
//             <h2>age: {p.age}</h2>
//             <h2>isActive: {p.isActive ? "true" : "false"}</h2>
//         </div>
//     );
// }
// User.defaultProps = {
//     name:'jhanu' ,
//     age:20 ,
//     isActive:true
// };
// // manam pss cheyaledhu anthy apudey use cheyali default props
// function App()
// {
//     return (
//         <User/>
//     )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Portals
// import { createPortal } from "react-dom";
// function User(p)
// {
//     return (
//             createPortal(
//                 <div id='portal'>
//                 <h1>This is User component</h1>
//                 <h1>username: {p.name}</h1>
//                 </div>, document.body
//             )
//     );
// }

// function App()
// {
//     return (
//         <div id='app'>
//         <h1>This is App component</h1>
//         <User name='jhan' />
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);


//protal example
// import { createPortal } from "react-dom";
// import { useState } from "react";
// import './index.css'; 
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Model(p)
// {
//     return (
//         // <div className="model-overlay">
//         // <div className="content">
//         //     <h1>This is Model component</h1>
//         //     <p>Model content goes here...</p>
//         //     <button className='btn btn-danger' onClick={p.close}>Close Model</button>
//         // </div>

//         // </div>
//         createPortal(
//             <div className="model-overlay">
//                 <div className="content">
//                     <h1>This is Model component</h1>
//                     <p>Model content goes here...</p>
//                     <button className='btn btn-danger' onClick={p.close}>Close Model</button>
//                 </div>
//             </div>,
//             document.body)
//             //document.getElementById('app'))
//     )
// }

// function App()
// {
//    const[show,update]=useState(false);
//    function ToggleModel(){
//     update(!show)
//    }
//     return
//  (
//         <div id='app'>
//         <button className="btn btn-primary m-4" onClick={ToggleModel}>open</button>
//         {
//             show === true&& <Model close={ToggleModel}/>
//         }
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
