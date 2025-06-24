
// TOPICS: basic react and jsx syntax,functional and class comps,imports and exports.


// we r not using cdn links we r importing from react create app 

import React from 'react';
import ReactDOM from 'react-dom/client';

// using react

//  Create list items

// let li1 = React.createElement('li', {}, "HOME");
// let li2 = React.createElement('li', {}, "Page");
// // Create ul element with li children
// let ul = React.createElement('ul', {}, [li1, li2]);
// // Render to root
// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ul);

// using jsx

// let menu=(<ul>
//   <li> Home </li>
//   <li>page</li>
// </ul>)
// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(menu);

//or

// let name="jhanu"
// ReactDOM.createRoot(document.getElementById('root')).render(<ul>
//      <li> Home </li>
//     <li>page</li>
//     <li>{name}</li>
//  we should keep the variable in curly braces 
//      </ul>)

// if functions are used - we need to write in braces with function name opening and closing tags

// function Menu()
// {
//   return (<div>
//     <h1>This is sample example </h1>
//     <p> This is a sample paragraph </p>
//   </div>)
//   // this is called as functional component
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Menu></Menu>)


//components:
// 1. functional components

// function App()
// {
//   // return (<div>
//   //   <ul>
//   //     <li>home</li>
//   //     <li>about us</li>
//   //     <li>contact us</li> 
//   //   </ul>
//   // </div>)
// let app=["home","contact","aboutus"]
// return (
//  <div>
//   <ul>
//     <li>{app[0]}</li>
//     <li>{app[1]}</li>
//     <li>{app[2]}</li>
//   </ul>
//  </div>
// )

// }ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)


// 2. class components

// class Menu extends React.Component
// {
//   // we use render method to return the jsx
//   render(){
//     let app=["home","contact","aboutus"]

//     return (<div>
//       <ul>
//         <li>{app[0]}</li>
//         <li>{app[1]}</li>
//         <li>{app[2]}</li>
//       </ul>
//      </div>)
//   }
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<Menu/>)


// example of named exports and imports

// import {person} from "./App" - named export
//or import {person as x} from "./App"

// import x from "./App" // default export
// function Menu()
// {
//   console.log(x);
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<Menu/>)

// combining both named and default exports

//  import x,{person} from "./App" 
// function Menu()
// {
//   console.log(x);
//   console.log(person);
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<Menu/>)