// TOPICS: bg color changer,counter app,props destructing,TODO APP,calculator app

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";
// //1. i added the styles in index.css
// //2. i created a global css in public body - anthy ekkada em chesamo adi annitiki apply avudi
// //3. create chesina global.css anedi index.html main page lo a link add cheyali
// //4. main index.js file lo onclick fun rasam
// function App()
// {
//    return (
//     <div id='index'>
//       <h1> change background color </h1>
//       <input type='color' onChange={(e)=>{document.body.style.background=e.target.value}}></input>
//     </div>
//    )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// counter app

// function App()
// {
//   let [counter,update] = useState(0);
//   let stock=10;
//     return (
//       <>
//       <h1 style={{'color':'red'}}> Add to Cart </h1>
//       <div id='index'>
//        <button className='plus' disabled={counter===stock} onClick={()=>
//         {
//           if(counter<stock)
//           {
//              update(counter+1);
//           }
//         }
//        }> + </button>
//        <h2> {counter} </h2>
//        <button className='minus' disabled={counter===0} onClick={()=>
//         {
//           if(counter>0)
//           {
//              update(counter-1);
//           }
//         }
//        }> - </button>
//       </div>
//       </>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// props destructing

// function App()
// {
//   let product={
//     id:1,
//     name:"iphone",
//     price:100000,
//     brand:"apple"
//   }
//   return (
//     // <User id={product.id} name={product.name} price={product.price} brand={product.brand}> Details:</User>
//     // instead of this we can use spread operator
//     <User {...product } />

//   )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
// //nrml props method
// function User(props)
// {
//  return(
//   <>
//   <h1>{props.children}</h1>
//   <h2>id:{props.id}</h2>
//   <h2>name:{props.name}</h2>
//   <h2>price:{props.price}</h2>
//   <h2>brand:{props.brand}</h2>
//   </>
//  )
// }
//props destructing:only manaki em kavalo adey tesukuntham parameters-must take in curly braces

// function User({id,brand})
// {
//  return(
//   <>
//   <h2>id:{id}</h2>
//   <h2>brand:{brand}</h2>
//   </>
//  )
// }

// TODO app

// we r using bootstrap 5 link in main index.html so we r adding classname

// function App() {
//   const [todoinput, updateinput] = useState("");
//   const [todo, update] = useState([
//     { id: 1, task: "exercise" },
//     { id: 2, task: "study" },
//   ]);

//   function createmenu() {
//     if (todoinput.trim() === "") {
//       alert("Add some task");
//     } else {
//       const nextId = todo.length > 0 ? todo[todo.length - 1].id + 1 : 1;
//       const newtodo = [...todo, { id: nextId, task: todoinput }];
//       update(newtodo);
//       updateinput("");
//     }
//   }

//   function deletetodo(id) {
//     const updated = todo.filter((t) => t.id !== id);
//     update(updated);
//   }

//   return (
//     <div className="container mt-5 w-40">
//       <h2 className="text-center">ToDo App</h2>
//       <div className="input-group">
//         <input
//           className="form-control"
//           onChange={(e) => updateinput(e.target.value)}
//           type="text"
//           value={todoinput}
//         />
//         <button className="btn btn-primary" onClick={createmenu}>
//           Add
//         </button>
//       </div>
//       <ul className="list-group mt-3">
//         {todo.map((t) => (
//           <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
//             <span>{t.task}</span>
//             <button className="btn-btn-primary btn-sm" onClick={() => deletetodo(t.id)}>
//               ❌
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);


// a complete website

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [todoinput, setInput] = useState("");
//   const [todoList, setTodoList] = useState([
//     { id: 1, task: "Exercise" },
//     { id: 2, task: "Study" },
//   ]);

//   function addTodo() {
//     if (todoinput.trim() === "") {
//       alert("Please enter a task!");
//       return;
//     }
//     const newId = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
//     const newTask = { id: newId, task: todoinput.trim() };
//     setTodoList([...todoList, newTask]);
//     setInput("");
//   }

//   function deleteTodo(id) {
//     const updatedList = todoList.filter((t) => t.id !== id);
//     setTodoList(updatedList);
//   }

//   function clearAll() {
//     if (todoList.length === 0) return;
//     if (window.confirm("Are you sure you want to clear all tasks?")) {
//       setTodoList([]);
//     }
//   }

//   return (
//     <div className="container mt-5">
//       <div className="card shadow p-4">
//         <h2 className="text-center mb-4 text-primary">📝 ToDo App</h2>
//         <div className="input-group mb-3">
//           <input
//             className="form-control"
//             placeholder="Enter a task..."
//             onChange={(e) => setInput(e.target.value)}
//             value={todoinput}
//             onKeyDown={(e) => e.key === "Enter" && addTodo()}
//           />
//           <button className="btn btn-success" onClick={addTodo}>
//             Add
//           </button>
//         </div>

//         {todoList.length === 0 ? (
//           <p className="text-center text-muted">No tasks yet. Add some!</p>
//         ) : (
//           <ul className="list-group mb-3">
//             {todoList.map((t) => (
//               <li
//                 key={t.id}
//                 className="list-group-item d-flex justify-content-between align-items-center"
//               >
//                 <span>{t.task}</span>
//                 <button
//                   className="btn-btn-danger btn-sm"
//                   onClick={() => deleteTodo(t.id)}
//                 >
//                   ❌
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}

//         <div className="text-center">
//           <button
//             className="btn btn-outline-danger"
//             onClick={clearAll}
//             disabled={todoList.length === 0}
//           >
//             Clear All
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// calculator app

// import Keypad from "./Keypad";
// import './index.css'
// function App()
// {
//   let [input,update]=useState("");
//   function handleClick(value)
//   {
//      update(input+value)
//   }
//   function calculate(value)
//   {
//      let outvalue=eval(input)
//      update(outvalue);
//   }
//   function handleClear()
//   {
//      update("");
//   }
//     return (
//         <div className="container">
//           <h2>calculator app </h2>
//           <div className="calci"></div>
//           <input type='text' value={input} className="output"/>
//           <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>
//         </div>
//     )

// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

