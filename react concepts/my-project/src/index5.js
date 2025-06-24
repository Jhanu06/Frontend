// TOPICS: Two ways data binding,conditional rendering,use effect(),Making API CALL with USE EFFECT()
//static image in react ,custom hook


import React  from "react";
import ReactDOM from 'react-dom/client'

//Two ways data binding

// function App()
// {
//   let[counter,update]=useState(0);
//   return(
//     <div>
//     <h1>counter:{counter}</h1>
//     <button onClick={()=>{
//       update(counter++)
     
//     }}>click</button><br></br>
//     <input type='text' onChange={(e)=>
//       {
//         let temp=e.target.value;
//         update(temp)
//       }
//     } value={counter}></input>
//     </div>
//   )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)


// conditional rendering - based on cond it shows the output in browser
// best eg - when u open a new website it asks for login after u loged in the login button doesnt show again until u logout 

// import './index.css'
// let loginid = false;
// let isAdmin = true;  

// function App() {
//   return (
//     <>
//       <Header />
//       {
        // isAdmin ? <AdminDashboard /> : null
        // use this only for true
        // isAdmin && <AdminDashboard/> // isadmin anedi true iyinapudy pakkadi avudi
//       }
//     </>
//   );
// }

// function Header() {
//   return (
//     <ul>
//       <li>Home</li>
//       <li>About Us</li>
//       <li>Contact</li>
//       {
          // better to show either true or false use this syntax
//         loginid ? <li>Logout</li> : <li>Login</li>
//       }
//     </ul>
//   );
// }

// function AdminDashboard() {
//   return (
//     <h1>This is Admin Dashboard</h1>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// use Effect()

// import { useState, useEffect } from "react";
// function MyComponent() {
//   const [count, setCount] = useState(0);

//   // 1. No dependency array
//   useEffect(() => {
//     console.log("1. Every render");
//   });

//   // 2. Empty array = only once
//   useEffect(() => {
//     console.log("2. Only once (on mount)");
//   }, []);

//   // 3. With dependency
//   useEffect(() => {
//     console.log("3. Only when count changes");
//   }, [count]);

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </>
//   );
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<MyComponent/>)


// Making API CALL with USE EFFECT()
// 1. take API FROM fakestore api - get all products api key 
// import { useState, useEffect } from "react";
// import Productcard from "./Productcard";
// import './index.css'

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts();
//   }, []);  // ← run once on mount

//   async function getProducts() {
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const productList = await res.json();
//       setProducts(productList);
//       //console.log(productList);
//     } catch (err) {
//       console.error("Failed to fetch products:", err);
//     }
//   }

//   if (products.length === 0) {
//     return <h1>Fetching data…</h1>;
//   }

//   return (
//       <div className="con">
//          { products.map((p)=> (
//         < Productcard 
//         {...p} key={p.id}
//         />
//       ))}
//       </div>
//       )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);


// custom hooks
//Custom hook is just a function that uses React hooks (useState, useEffect...) and helps us reuse code.
//Oka normal JS function that starts with use, and contains React logic (like useEffect, useState)

// import Productcard from './Productcard';
// import useProducts from './UseProducts'; 
// import './index.css'
// function App() {
//   const { products, loading } = useProducts(); 
//   if (loading) {
//     return <h1>Fetching data…</h1>;
//   }

//   return (
//     <div className="con">
//       {products.map((p) => (
//         <Productcard {...p} key={p.id} />
//       ))}
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);


//static(local) image in react 
// storing static files in public folder wher we add access them in browser like local3006/name of the file


// function App()
// {
//    return (
//     <>
//     {/* 1. <img style={{width:200}} src={"staticimage.jpg"}></img> */}
//     {/* 2. <img src={"staticimage.jpg"} ></img>*/}
//     {/* 3. // separate folder create chesi img andulo unty
//     <img src={"/images/staticimage.jpg"} ></img> */}
//     {/* 4. <img src={"./staticimage.jpg"} ></img> */}
//     {/* 5. if a img is nt in public then we need to import that file 
//     <img src={user}></img> */}
//      </>
//    )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);