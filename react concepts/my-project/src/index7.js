//TOPICS : UseContext() hook,usememo() hook,child to parent component passing
// component lifecycle methods

// import React, { useEffect, useMemo, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

// import { createContext } from 'react';
// import Parent from './Parent'
// // denini oka func la rasam epudu denini verey di use cheyali anthy
// // e func ni export cheyali

//  export let context=createContext()
// function App()
// {
//   let a='false';
//   let p={
//     name:'Rahul',
//     age:23
//   }
//  return (
//   <div>
//     <context.Provider value={p}>
//          <Parent></Parent>
//     </context.Provider>
//   </div>
//  )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// usememo() hook
// function App()
// {
//   const [counter,update]=useState(1);
//   let n1=1;
//   let n2=10;
//   let sum=useMemo(
//     ()=>{
//   return n1+n2;
//     },[n1,n2]
//   )
//  return(
//   <>
//   <button onClick={()=>{
//     update(counter+1);
//   }}>add</button>
//   <h1>counter:{counter}</h1>
//   <h1>sum:{sum}</h1>

//   </>
//  )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// function App() {
//   const [n1, setN1] = useState(0);
//   const [n2, setN2] = useState(0);
//   const [trigger, setTrigger] = useState(0); // for triggering memo on button click

//   const sum = useMemo(() => {
//     return Number(n1) + Number(n2);
//   }, [trigger]); // only updates when button is clicked

//   return (
//     <>
//       <input
//         type="number"
//         placeholder="Enter n1"
//         value={n1}
//         onChange={(e) => setN1(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Enter n2"
//         value={n2}
//         onChange={(e) => setN2(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           setTrigger(trigger+1); // trigger sum calculation
//         }}
//       >
//         Add
//       </button>

//       <h1>Sum: {sum}</h1>
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// import './index.css'
// function App() {
//   // time hh:mm:ss format lo kavali anapudu ela use chesta
//   let [time, settime] = useState(new Date().toLocaleTimeString());
//   let [product, updateproduct] = useState([
//     { id: 1, name: "Apple Iphone 11 Plus", price: 50000 },
//     { id: 2, name: "One Plus Nord CE2", price: 90000 },
//     { id: 3, name: "Redmi Note Pad 32C", price: 120000 },
//   ]);

//   // instead of this we use useMemo

//   let [search, updatesearch] = useState('');
//   // const filterproducts = filtered(product, search);
//   // function filtered(product, search) {

//   //   return product.filter((p) => {
//   //     return p.name.toLowerCase().includes(search);
//   //   });
//   // }

//   const filterproducts = useMemo(() => {
//     //console.log(product)
//     return product.filter(
//       (p) => {
//         return p.name.toLowerCase().includes(search);
//       },
//       [product, search]
//     );
//   });

//   useEffect(() => {
//     setInterval(() => {
//       // ekkada every one sec ki time update avuthu undali
//       settime(new Date().toLocaleTimeString());
//     }, 1000);
//   }, []);
//   return (
//     <>
//       <div>{time}</div>
//       <input tpe='text' value={search} onChange={(e)=>{updatesearch(e.target.value)}}></input>
//       <table id='con'>
//         <tr>
//           <td>S.No.</td>
//           <td>Name</td>
//           <td>Price</td>
//         </tr>
//         {filterproducts.map((p) => (
//           <tr key={p.id}>
//             <td>{p.id}</td>
//             <td>{p.name}</td>
//             <td>{p.price}</td>
//           </tr>
//         ))}
//       </table>
//     </>
//   );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// child to parent component passing

// function Parent()
// {
// const test=(data)=>{
//     return data;
// }

//  return (<Child msg= {test}  />)
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<Parent />);
// function Child(props)
// {
//  return (
//     <>
//      <h1> {props.msg("hello")} jhansi</h1>
//     </>
//  )
// }
// // parent to child component passing-1.create a func(test) in parent fun
// // 2. pass that func(test) as props to child 3.provide child data as input to call fun

// example for child to parent comp

// function Search(p)
// {
//     let [inputs,updateinputs]=useState("")
//     return (
//         <>
//         <input value={inputs} onChange={(p)=>{
//             updateinputs(p.target.value)
//         }}></input>
//         <button onClick={()=>{
//           p.add(inputs)
//         }} ></button>
//         </>
//     )
// }
// function App() {


//   let [todo, updatetodo] = useState(["Task1", "Task2"]);

//   let addnew=(task)=>{
//     updatetodo([...todo,task])
//   }
//   return (
//     <>
//     <Search add={addnew}></Search>
//       <ul>
//         {todo.map((p) => (
//           <li>{p}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// component lifecycle methods

// class App extends React.Component{
// // constructor()
// // {
 
// // }
//     render()
//     {
//         return (
//             <>
            
//             <h1> Component lifecycle methods </h1>
//             </>
//         )
//     }
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// 3 phases
// MOUNTING PHASE : its methods- 1.constructor(),2.getDerivedStateFromProps() 3.render() 4.componentdidmount()
class App extends React.Component{
constructor(p)
{
    super(p)
    this.state={
    count:10,
    show:2
}
}

    render()
    {
        return (
            <>  
            <h1> Component lifecycle methods </h1>
            {this.state.show&& <App1 data={this.state.count}></App1> }

            <button onClick={()=>{this.setState({show: false})}}> hide </button>
            <button onClick={()=>{this.setState({show : true})}}> show </button>


            {/* <App1 data={this.state.count}></App1> */}
             {/* <h1>{this.state.count}</h1> */}
            <button onClick={()=>{this.setState({count : this.state.count+10})}}> click me
            </button> 
            </>
        )
    }
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

class App1 extends React.Component{
constructor(props)
{
    console.log("constructor method")
    super(props);
    this.state={
        count:this.props.data+10,
        product:"dummy"
    }
}

// repeated gaconstructor call avadu so manam e func anedi rastham edaina continue ga work avali anthy

static getDerivedStateFromProps(props, state) {
    console.log(" from get derived from props method")
    return {
        ...state,
        count:props.data+10
    };
    //null - compdidmount
    // {
    //      count: props.data + 10     
    // };
}

//mounting method
// class comps lo e mehod antha mount iyaka api calls cheyadaniki use chestham
componentDidMount()
{
    console.log("component did mount");
    fetch('https://fakestoreapi.com/products/1')
  .then(response => response.json())
  .then(data => {console.log(data);
    this.setState({...this.state,product:data.title})
  });
}

// updating phase method -methods: 1.getDerivedStateFromProps(),2.shouldComponentUpdate(),
// 3.render(),4.getSnapshotBeforeUpdate(),5.componentDidUpdate()
shouldComponentUpdate()
{ console.log(" from should component update")
    // re-render avatledh
    //return false;

   return true; // render avuthadi
}
getSnapshotBeforeUpdate(prevprops,prevstate)
{
 console.log("inside get snapshot before update")
 return null;
}

componentDidUpdate()
{
    console.log("inside component did update")
}
// unmounting phase - its method:componentwilunmount()
componentWillUnmount()
{
    console.log("in component will unmount")
}

    render()
    {
        console.log("render method")
        return (
            <>  
            <h1> Component lifecycle methods in clid</h1>
            <h1>props:{this.props.data}</h1>
            <h1>count:{this.state.count}</h1>
            <h1>product name:{this.state.product}</h1>
            </>
        )
    }
}

