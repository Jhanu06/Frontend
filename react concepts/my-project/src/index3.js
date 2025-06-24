// TOPICS : states- in functional and class components,

import React from 'react';
import ReactDOM from 'react-dom/client';

// function App()
// { 
//   function Update()
//   {
//     counter++;
//     console.log(counter);
//   }
//   let counter=0;
//   return (
//   <>
//   <h1> counter : {counter} </h1>
//   <button onClick={()=>{Update()}}>change</button>
//   </>)
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// in console we can use the update of counter value but in browser we cant due to call cheyale a fun ni
// anthy dom lo update cheyatle-danikosam states any concept vachindi

// in class comps we need to update the value or re-enter dynamically we use states
//usestate->it is also called as hook used in functional components


import { useState } from 'react'; // useState is a hook used in functional components

// function App()
// { 
//    let [counter,update]=useState(0); // initial value evali 
//   // usestate anedi array return chestundi 
//   // update anedi oka method akkada counter aney variable ni update chestadi
//   return (
//   <>
//   <h1> counter : {counter} </h1>
//   <button onClick={()=>{update(counter--)}}>change</button>
//   </>)
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)


// function App() {
//   let product = "redmi note 10";
//   let price = 1200;
//   let [productname, updatename] = useState("realme 10");

//   // function handleUpdate() {
//   //   let val = document.getElementById('test').value;
//   //   update(val); // this will update the productname state
//   // }
//   return (
//     <>
//       <h1>Product: {productname}</h1>
//       <p>Price: {price}</p>
//       <input type="text" id="test" />
//       {/* <button onClick={handleUpdate}>Update</button> */}
//      
//        <button onClick={()=>
//         {
//           let val=document.getElementById('test').value;
//           //updatename(val); // ekkada vlue kuda evachu or ekkada fun la kuda rayochu
//           // updatename anedi method ekkada em chestamo adi paina unna variable ni update chestadi
//           updatename(()=>
//           {
//             //<> <h1>hello world</h1></> // we must write return keyword otherwise it shows nothing

//           // return (<> <h1> iphn 11</h1>
//           //             <h2> updating value </h2></>)
//             return val;
//            // return "react";
//            // if i dont return anything then it will return mothing shows undefined
//           })
//         }
//       }>Update</button>
//     </>
//   );
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// iam updating both values in the same function

// function App() {
//   let product = "redmi note 10";
//   let price = 1200;
//   let [productname, updatename] = useState("realme 10");
//   let [pricename, update] = useState("12000");

//   return (
//     <>
//       <h1>Product: {productname}</h1>
//        <input type="text" id="test" />
//       <p>Price: {pricename}</p>
//       <input type="text" id="test1" />
//       <button onClick={()=>
//         {
//           let val=document.getElementById('test').value;
//           updatename(()=>
//           {
//             return val;
//           })
//           let val1=document.getElementById('test1').value;
//           update(()=>{
//             return val1;
//           })
//         }
//       }>Update</button>
//     </>
//   );
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// we r giving objs to usestate

// function App() {
//   let [product,updatename] =useState({
//     productname: "redmi note 10",
//     pricename: 1200
//   })
// // ekkada product anedi obj 

//   return (
//     <>
//       <h1>Product: {product.productname}</h1>
//       <p>Price: {product.pricename}</p>
//       <h1>product:{JSON.stringify(product)}</h1>
//       <input type="text" id="test" />
//       <button onClick={()=>
//         {
//           let val=document.getElementById('test').value;
//           updatename({
//             productname:val,
//             pricename:product.pricename
            
//           }) 
//           // ekkadaa rondu value em chupinchadu -bcz avi objs kabati
//           //objs ni browser lo chupinchali ante we must use JSON.stringfy method
//         }}> Update</button>
//     </>
//   );
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);


// states in class components

// class App extends React.Component {
//   // state is an object and a property of the class
//   state = {
//     counter: 0
//   };

//   render() {
//     return (
//       <>
//         <h1>Counter: {this.state.counter}</h1>
//         <button onClick={() => {
//           this.setState((prevState) => ({ counter: prevState.counter + 1 }));
//         }}>
//           Change
//         </button>
//       </>
//     );
//   }
//}

  // use setState to update state safely
//   class App extends React.Component {
//     state = { counter: 0 };
  
//     increase = () => {
//       this.setState({ counter: this.state.counter + 1 });
//     };
  
//     render() {
//       return (
//         <>
//           <h1>Counter: {this.state.counter}</h1>
//           <button onClick={this.increase}>Increase</button>
//         </>
//       );
//     }
//   }  
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);


// class App extends React.Component {
//   // state = {
//   //     product: "redmi",
//   //     price: 1200
//   //   };
//   constructor() {
//     super();
//     this. state = {
//       product: "redmi",
//       price: 1200
//     };
//     this.update = this.update.bind(this); // binding the method to this instance
//   }
// //we can also use state in constructor
//   update() {
//     let val = document.getElementById('test').value;
//     this.setState({ price: val });
//   }

//   render() {
//     return (
//       <>
//         <h1>Product: {this.state.product}</h1>
//         <p>Price: {this.state.price}</p>
//         <input type="number" id="test" />
//         <button onClick={this.update}>Update</button>
//       </>
//     );
//   }
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// this shows an error bcz this keyword is nt accessed here so we need to write a constructor
// and bind the function to the constructor

