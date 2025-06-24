// Topics : useReducer() ,REDUX - implementation,TODO app in redux,MiddleWare in redux

import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

//  useReducer()

// function App()
// {
//     function counter(state, input) {   // here state-prev val of count ,input-new input
//       console.log(state,input)
//  // ekkada return chestundi newstate lo store avudi -updated state
//        return state+input // newstate

//     }
//     // useReducer is used to manage complex state logic in React applications.
// const[count,dispatch]=useReducer(counter,0)
//   return (
//     <div className="mt-4 d-flex">
//         <h1>useReducer Example</h1>
//         <button className="btn btn-primary m-2" onClick={()=>{dispatch(-1)}}> - </button>
//         <div className="m-2">counter: {count} </div>
//          <button className="btn btn-primary m-2" onClick={()=>{dispatch(1)}}> + </button>
//     </div>
//   )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);

// function App()
// {
//     function counter(state, action) {   
//     //  if(action.type==="decre")
//     //     return state + action.payload; // decrement
//     //  else if(action.type==="incre")
//     //     return state + action.payload;  // increment
//     // else if(action.type==="reset")    
//     //     return 0; // reset to zero
//     //  return state; // default case, return current state

//     // we can also write by switch case
//     switch(action.type)
//     {
//         case "incre" : return state + action.payload;
//         case  "decre" : return state + action.payload;
//         case "reset" : return 0;
//         default : return state; // default case, return current state
//     }

//     }
// const[count,dispatch]=useReducer(counter,0)
//   return (
//     <div className="mt-4 d-flex">
//         <h1>useReducer Example</h1>
//         <button className="btn btn-primary m-2" onClick={()=>{dispatch({type:"decre",payload:-5})}}> - </button>
//         <div className="m-2">counter: {count} </div>
//          <button className="btn btn-primary m-2" onClick={()=>{dispatch({type:"incre",payload:+5})}}> + </button>
//         <button className="btn btn-danger m-2" onClick={()=>{dispatch({type:"reset"})}}> Reset </button>
//     </div>
//   )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);

// REDUX -implementation and simple example 

import store from './store'
import {Provider} from "react-redux"
import Account from "./Account";
import Formredux from "./Formredux";
function App()
{
  return (
    <div className="mt-4 d-flex flex-column align-items-center">
      <h1>Redux Example</h1>
      <Account />
      <Formredux />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Provider store={store}><App></App></Provider>);


// Redux - TODO App

// import store from './store'
// import {Provider, useDispatch, useSelector} from "react-redux"
// import { ADD_TODO,EDIT_TODO,DELETE_TODO } from "./Actions";
// import Todolist from "./Todolist";
// import './index.css'
// function App()
// {
//   const dispatch=useDispatch();
//   const [todotitle,setTodotitle]=useState("")
//   const handletodo=()=>{
//    if(todotitle.trim())
//    {
//     const newtodo={
//       title:todotitle
//     }
//     dispatch(ADD_TODO(newtodo))
//     setTodotitle("")
//    }
//   }
//   return ( //mt means margin
//     <div className="container mt-5 w-50"> 
//     <h1 className="text-primary text-center"> ToDo App using Redux </h1>
//     <div className="input-group">
//       <input type="text" className="form-control" value={todotitle} onChange={(e)=>{
//         let val=e.target.value
//         setTodotitle(val)
//       }}></input>
//       <button className="btn btn-primary" onClick={()=>{handletodo()}}> Add </button>
//     </div>
//     <Todolist/>
//     </div>
//   );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<Provider store={store}><App></App></Provider>);



// MiddleWare - REDUX

// import {applyMiddleware, createStore} from "redux"
// import { Provider } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { thunk } from "redux-thunk";




// const initialstate={
//   userData:{

//   }
// }

// function Reducer(state=initialstate,action)
// {
//         switch(action.type)
//         {
//           case "Add":
//             return {...state,userData:action.payload}
//         }
// }
// // to call this reducer we use dispatch
// // dispatch({type:"Add",payload:"jk"})

// // dispatch lo oka func anedi estunam oka input laga reducer func ki 
// // ADEY middleware avudi dispatch(fetch())

// const store=createStore(Reducer,applyMiddleware(thunk))
// function App()
// {
//   const dispatch=useDispatch()

//  let data= useSelector(
//     (state)=>state?.userData // checking
//   )
//   console.log(data)
//   async function fetchData(dispatch,getState)
//   {
//     let res=await fetch("http://localhost:3000/products/2")
//     let data= await res.json()
//     console.log(data)
//     dispatch({type:'Add',payload:data})
//   }

//   return (
//     <div className="mt-4 d-flex flex-column align-items-center">
//       <h1>MiddleWare</h1>
//       <div className="container mt-5 w-50">
//         <h3 className="text-primary">ID:{data?.id}</h3>
//         <h3 className="text-primary">Name:{data?.name}</h3>
//         <h3 className="text-primary">Price:{data?.price}</h3>
//          <h3 className="text-primary">Category:{data?.category}</h3>
//       </div>
//       <button className="btn btn-warning" onClick={()=>{dispatch(fetchData)}}> Get </button>
  
//     </div>
//   );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<Provider store={store}><App></App></Provider>);