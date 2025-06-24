
//TOPICS: styling css,props-user.js,map using props,functional comps-arrow functions,fragments.
// event handling


// import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

// we r exporting default app from app.js

// export function App()
// {
//   return (
//     <div>
//       <input type='checkbox' id='test'/>
//       <label htmlFor='test'>test</label>
//     </div>

//   )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)

// we must use some reserved keywords like className for defining a class attritube
// in any tag and also for htmlFor for defining a for attribute in label tag
// we must use cury barces for any operation to perform - a logic avali anna must and should



// import User from "./User"; // Correct path to User component 

// function App() {
//   return (
//      <>
//      < User name='jhansi' age='21'> hello world </User> 
//      < User name='sunila' age='26' />
//      </>
//   );
// }
//  ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)


// function Product(props) {
//   return (
//     <div>
//       <h2>Product Name: {props.name}</h2>
//       <p>Price: ₹{props.price}</p>
//     </div>
//   );
// }
  
// ekkada app anedi parent ekkada properties ni manam product aney daniki pass chetunnam and
//  in app we have to mention the produc(another func name) apudu dani values estam -- <Product name="Redmi Note 10" price={12000} />

// function App() {
//   return (
//     <div>
//       <h1>Welcome to the Store</h1>
//       <Product name="Redmi Note 10" price={12000} />
//       <Product name="Realme 11x" price={14000} />
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);



// index.js is the parent functional comp we r passing 
// the props to user.js and we r exporting the user component from user.js
// and importing it in index.js

// map concept

// import User from "./User"; 
// function App() {
//   let users=[{
//     id:25,
//     name:'jhanu',
//     age:21
//   },{
//     id:20,
//     name:'jaan',
//     age:23
//   }]
  
//   return (
//     <>
//     { 
//     [ users.map((u)=>
//     {
//      return <User key ={u.id} id={u.id} name={u.name} age={u.age} />
//     })
//     ]
//      }
//      </>
//   )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)


// ARROW FUNCTION

// let Use=()=>
//   <div> <h1>using arrow func </h1>
//   <h2> this is a sample example </h2></div>
//  ReactDOM.createRoot(document.getElementById('root')).render(<Use></Use>)

// anonymous function
// let Use=function(){
    
//     return <h1> example of anonymous func </h1>
// }
//    ReactDOM.createRoot(document.getElementById('root')).render(<Use></Use>)
  

// using fragments: <> </> is used to group multiple elements without adding extra nodes to the DOM

// function App() {
//   return (
    // <div>
    //   <div> this is div1</div>
    //   <div> this is div2</div>
    // </div>
//   )
// return (  uisng fragments
  // <>
  //   <div> this is div1</div>
  //   <div> this is div2</div>
  // </>
//   )

// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)


//using div and frags
// function App() {
//   return (
//     <div style={{display: 'flex'}}>
//      <App1></App1>
//     </div>
//   )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// when we use display:flex all the lines are mixed and shows in one line
// using div-it shows block wise only
// using fragments-it applys styles 
// so better to use frags when to store or display multiple childs

// function App1() {
//   return (
//     <>
//       <div> this is div1</div>
//       <div> this is div2</div>
//     </>
//   )
// }


//EVENT HANDLING

// function App() {
//   function User(num)
// {
//     return (alert("button : " + num )); 
//     // the alert takes only one arg if we gave 2 it takes the frst one so we need t use "+"
// }
//   return (
//     //<button onClick={User}> click me </button>

//     // in place of onClick we can use onChange, onMouseOver, onMouseOut, onKeyPress etc
//     //we can use any othr funs in user

//     // <button onClick={ () => {alert("button")} }> click me </button>
//     <button onClick={ () => {User(1026)} }> click me </button>
//   )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// ekkada arrow function epudu work avutundi anthy manam a button meeda click chesaka work avuthadi
// oka fun ni call chesinapudu akkada event details kuda pass chesukovachu 

// function App() {
//   function User(num,e)
// {
//     alert("button : " + num ); 
//    // console.log(e)
//     console.dir(e.target) // dir shows the obj form 
//    //e.target is used to get the element which is clicked
// }
//   return (
//     <button onClick={(e) => {User(1026,e)}}> click me </button>
//   )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// plain js lo add chesinatu add chesam kani ekkada rasindi js kadh react create chesina event
// a event internal ga js kinda convert avutundi react lib chestadi alaga
// onclick anedi reactname dani related event info antha vastadi

// function App() {
// function User(num,e)
// {
//     alert("button : " + num ); 
//     console.dir(e.target);
// }
//   return (
//     <input type='text' onChange={(e)=>{User(1026,e)}}/>
//   )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)