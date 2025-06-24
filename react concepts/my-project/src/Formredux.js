// // ekkda data ni update cheyali anthy form lo fill chesindi data add avali

import { useDispatch } from "react-redux";
import { useState } from "react";
import { deposit,withdraw,mobileUpdate,nameUpdate } from "./Actions";
function Formredux() {
  const [amount, setAmount] = useState("");
   const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [transactionId, updatetransactionId] = useState(0);


    let disptach = useDispatch();
  return (
    <div className="container">
      <h1> Form </h1>
      <div className="row">
        <div className="col-4">
          <input
            className="form-control"
            type="number"
            placeholder="enter amount"
            value={amount}
            onChange={(e) => {
              let data = e.target.value;
              setAmount(data);
            }}
          ></input>
        </div>

        <button
          className="btn btn-primary col-1"
          onClick={() => {
            // disptach({ type: "deposit", payload: amount });
            disptach(deposit(amount)); // action creator
            // here we r combining reducers
                        updatetransactionId(transactionId+1)

            disptach({type:"Add_Transaction",payload:{
               id:transactionId,
              amount:amount,date:new Date(),type:"Credit"
            }})
            setAmount("");
          }}
        >
          {" "}
          Deposit{" "}
        </button>
         <button
          className="btn btn-danger col-1 mx-2"
          onClick={() => {
            // disptach({ type: "withdraw", payload: amount });
            disptach(withdraw(amount));
            updatetransactionId(transactionId+1)
             disptach({type:"Add_Transaction",payload:{
              id:transactionId,
              amount:amount,date:new Date(),type:"Debit"
            }})
            setAmount("");
          }}
        >
          {" "}
          Withdraw{" "}
        </button>
      
         <div className="row mt-4">
         <div className="col-4">
          <input
            className="form-control"
            type="text"
            placeholder="enter Fullname "
            value={fullName}
            onChange={(e) => {
              let data = e.target.value;
              setFullName(data);
            }}
          ></input>
        </div>
           <button
          className="btn btn-primary col-1"
          onClick={() => {
           // disptach({ type: "nameUpdate", payload: fullName });
           disptach(nameUpdate(fullName));
            setFullName("");
          }}
        >
          {" "}
          update {" "}
        </button>
       </div>

        <div className="row mt-4">
         <div className="col-4">
          <input
            className="form-control"
            type="number"
            placeholder="enter mobile no. "
            value={mobile}
            onChange={(e) => {
              let data = e.target.value;
              setMobile(data);
            }}
          ></input>
        </div>
           <button
          className="btn btn-primary col-1"
          onClick={() => {
            //disptach({ type: "mobileUpdate", payload: mobile });
             disptach(mobileUpdate(mobile));
            setMobile("");
          }}
        >
          {" "}
          update {" "}
        </button>
       </div>
        <button
          className="btn btn-danger col-1"
          onClick={() => {
            disptach({ type: "reset"});
            setAmount("");
          }}
        >
          {" "}
          reset {" "}
        </button>
       </div>
    </div>
  );
}

export default Formredux;


// // for TODO APP
// import { useState } from "react";
// import { EDIT_TODO,DELETE_TODO } from "./Actions";
// import { useDispatch } from "react-redux";
// function Formredux({id,title})
// {
// const [edit,setupdate]=useState(false);
// const [edittitle,settitle]=useState(title);

// const dispatch=useDispatch()
// const handleTodo=()=>{
//   if(edittitle.trim())
//   {
//     dispatch(EDIT_TODO({id:id,title:edittitle}));
//     setupdate(false)
//   }
// }
// const handleDelete=()=>{
  
//     dispatch(DELETE_TODO(id));
// }

//     return (
//         <div>
//           {
//             edit?(
//               <div className="form-group">
//                <input className="form-control" type="text" value={edittitle} onChange={(e)=>{settitle(e.target.value)}}></input>
//                <button className="btn btn-primary" onClick={handleTodo}> save </button>
//                 </div>
//             ):(
//               <li className="list-group-item">
//                 <p>{title}</p>
//                 <div className="actions">
//                <button className="btn btn-warning" onClick={()=>{setupdate(true)}}> EDIT </button>
//                <button className="btn btn-danger" onClick={handleDelete}> DELETE </button>

//                 </div>
//               </li>
//             )
//           }
//         </div>
//     )
// }
// export default Formredux;