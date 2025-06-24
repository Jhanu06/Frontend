
// manam data ni tesukovali ekkda a store di- so we r using useselector method
// import { use } from "react";
// import { useSelector } from "react-redux";


// function Account()
// {
//   let data=  useSelector((state)=>{
//          return state
//     })
//     return (
//         <div className="container">
//          <h2 className="text-primary">Account Details</h2>
//          <table className="table table-bordered w-50">
//             <thead >
//                 <tr>
//                     <th> Balance</th>
//                     <th> UserName </th>
//                     <th> Mobile </th>
//                 </tr>
//             </thead>
//             <tbody>
//                  <tr>
//                     <td>{data.balance}</td>
//                     <td>{data.fullName} </td>
//                     <td>{data.mobile}</td>
//                 </tr>
//             </tbody>
//          </table>
//         </div>
//     )
// }

// export default Account;

// example for combine reducers

import { use } from "react";
import { useSelector } from "react-redux";


function Account()
{
  let data=  useSelector((state)=>{
         return state
    })
    console.log(data) // here in account we are having objs
    return (
        <div className="container">
         <h2 className="text-primary"> Transaction Details</h2>
         <table className="table table-bordered w-50">
            <thead >
                <tr>
                    <th> ID </th>
                    <th> Amount </th>
                    <th> Type </th>
                    <th> Date </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.transaction.map((tr,i)=>(
                    <tr key={tr.id}>
                    <td>{tr.id}</td>
                    <td>{tr.amount} </td>
                    <td>{tr.type}</td>
                     <td>{tr.date.toString()}</td>
                </tr>
                    ))
                }
            </tbody>
         </table>
         
        {/* for transaction */}

    <table className="table table-bordered w-50">
            <thead >
                <tr>
                    <th> Balance</th>
                    <th> UserName </th>
                    <th> Mobile </th>
                </tr>
            </thead>
            <tbody>
                 <tr>
                    <td>{data.account.balance}</td>
                    <td>{data.account.fullName} </td>
                    <td>{data.account.mobile}</td>
                </tr>
            </tbody>
         </table>
        </div>
    )
}

export default Account;