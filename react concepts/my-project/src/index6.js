// Topics : Routing, nested routing, route and query parameter,Error Handling,Lists and Keys
//UseRef() hook , props drilling

// ROUTING
// 1. install router library : npm install react-router-dom
// 2. configure routes
// 3. create Navigate links

import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

// // create 4 separate files to use routes
// import {BrowserRouter, Route,Routes,Link} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Login from './Login'
// // import Admin,{ Orders,Profiles} from './Admin'
// import Admin from './Admin'

// import './index.css'

// function Header() {
//   return (
//     <ul>
//       <li> <Link to="/Home">Home</Link></li>
//       <li> <Link to="/Login">Login</Link></li>
//       <li> <Link to="/About">AboutUs</Link></li>
//       <li> <Link to="/Contact">Contact</Link></li>
//        <li> <Link to="/Admin"> Admin </Link></li>
//        {/* route parameter */}
//        <li> <Link to="/Admin/25"> Admin-10</Link></li>
//         <li> <Link to="/Admin?category=10"> Admin</Link></li>
//           <li> <Link to="/Admin/25/jaan❤️?category=10&posts=143"> Admin-1</Link></li>

//     </ul>
//   );
// }
// function Errorpage()
// {
//   return(
//     <>
//       <h1> 404 ERROR </h1>
//       <p> Page Not Found </p>
//     </>
//   )
// }

// function App()
// {
//     return (
//         <>
//         {/* // this is showing both but we need only one comp to see */}
//         {/* <Home></Home>
//         <About></About> */}
//         {/* <h1>Routing</h1> */}
//         <BrowserRouter>
//         <Header/>
//         {/* <h1>Routing</h1> */}
//         <Routes>
//             <Route path='/Home' element={<Home/>}> </Route>
//             <Route path='Login' element={<Login/>}> </Route>
//             <Route path='About' element={<About/>}> </Route>
//             <Route path='Contact' element={<Contact/>}> </Route>
//             <Route path='Admin' element={<Admin />}> </Route>
//              {/* nested routing */}
//                {/* <Route path='/Admin/Orders' element={<Orders />}> </Route>
//                <Route path='/Admin/Profiles' element={<Profiles />}> </Route> */}
//         <Route path='Admin/:id/:name' element={<Admin />}> </Route>

//         {/* // error handling */}
//         <Route path='*' element={< Errorpage />}> </Route>

//         </Routes>
//         </BrowserRouter>
//         </>
//     )

// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// Lists and Keys

// function App()
// {
//   let a='js';
//   let b=['html','css','react','js']
//   let c=[{id:3 ,lang:'react'},{id: 1,lang:'css'},{id:2 ,lang:'js'}]
//    return(
//     <>
//      <h1> LISTS AND KEYS </h1>
//      {
//       b.map((l,index)=>
//         <li key={index}>{l}</li> )// just ela render chesthy error vastadi endukanthy prathi daniki oka key anedi undali

//       //c.map((l,ind)=><li key={l.id}> {l.lang}</li>)
//      }
//     </>
//    )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// UseRef() hook

import { useRef, useState } from "react";

// function App()
// {
//   let a=useRef(null)
//   let b=useRef(10)
//   let [counter,update]=useState(1)
//   return (
//     <>
//     <h1 ref={a} className="active"> This is an example of useRef hook </h1>
//     <button onClick={()=>{console.log(a) //currennt=h1
//       a.current.style.color='red' // h1 lo unna tag ki red color vastadi
//       console.dir(a.current) // h1 ani show chestadi
//       a.current.innerHTML="hello!" // h1 lo unna content change avudi
//     }}> click me </button>

// {/* // ela pedathy avadu endukanty b anedi oka obj kabati
//     <p> x value : {b} </p>
//     <button onClick={()=>{b=b+10}}> click me </button> */}
//     <p> x value : {b.current} </p>
//     <button onClick={()=>{b.current=b.current+10
//        console.log(b.current)
//         update(counter+1)}}> {/*ekkada console lo increment avutundi but browser lo avatleh*/}
//       click me </button>
//     </>
//   )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// useRef()- storing multiple tags
// import './index.css'

// function App() {


//   let a=useRef([]);

//   return (
//     <>
//       <h1 ref={(n)=>{a.current[0]=n}} onClick={(e)=>{ Changestyles(e)}}> this heading1</h1>
//       <h1 ref={(n)=>{a.current[1]=n}} onClick={(e)=>{ Changestyles(e)}}> this heading2</h1>
//       <h1 ref={(n)=>{a.current[2]=n}} onClick={(e)=>{ Changestyles(e)}} > this heading3</h1>
//       <h1 ref={(n)=>{a.current[3]=n}} onClick={(e)=>{ Changestyles(e)}}> this heading4</h1>
//       <h1 ref={(n)=>{a.current[4]=n}} onClick={(e)=>{ Changestyles(e)}}> this heading5</h1>
//     </>
//   );

//   function Changestyles(e)
// {  
//   for(let i of a.current)
//   {
//     i.classList.remove('primary')
//   }
//   e.target.classList.add('primary')

// }
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);


// function App() {

// let arr=new Array(10).fill()

//   let a=useRef([]);

//   return (
//     <>
//     {
//       arr.map((i,ind)=>{
//         return (
//           <h1 ref={(n)=>{a.current[ind]=n}} onClick={(e)=>{ Changestyles(e)}}> this heading : {ind+1}</h1>

//         )   
//     })
//     }
//     </>
//   );

//   function Changestyles(e)
// {  
//   for(let i of a.current)
//   {
//     i.classList.remove('primary')
//   }
//   e.target.classList.add('primary')

// }
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);


// props drilling

// import Parent from './Parent'
// function App()
// {
//   let a='false';
//  return (
//   <div> 
//     <Parent data={a} ></Parent>
//   </div>
//  )
// }
// function App() {
//   const username = "Jhanu";

//   return <Parent username={username} />;
// }

// function Parent({ username }) {
//   return <Child username={username} />;
// }

// function Child({ username }) {
//   return <GrandChild username={username} />;
// }

// function GrandChild({ username }) {
//   return <h1>Hello {username}</h1>;
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
