// import { Link, Outlet } from "react-router-dom";

// function Admin()
// {
//     return ( <>
//         <div>
//             <button> <Link to ="Orders"> orders </Link></button>
//              <button> <Link to ="Profiles"> profile </Link></button>
//         </div>
//  {/* without mentioning outlet tag we cant show the outputs of orders,profiles which are nested ones */}
// {/* in html we use href so in react use link to tag */}
//         <Outlet></Outlet>
//         <h1> This is Admin component </h1>
//         </>
//     )
// }

// export function Orders()
// {
//     return (
//         <h1> This is Admin orders component</h1>
//     )
// }
// export function Profiles()
// {
//     return (
//         <h1> This is Admin profile component</h1>
//     )
// }
// export default Admin;


// for route and query parameters
import { useParams,useLocation } from "react-router-dom";
// function Admin()
// {
//      // route parameters
//     //  let routeparam=useParams();
// //      console.log(routeparam); 
// //      // it shows output as objects 
// // // to access:
// //     console.log(routeparam.id);
// //     console.log(routeparam.name);
    
// let {id,name}=useParams();
// return (
//     <div>
//         <h1> id: {id}</h1>
//         <h1>name:{name}</h1>
//     </div>
// )

// }

function Admin()
{
  
    // query parameters
    let queryparams=useLocation();
    console.log(queryparams);
    // http://localhost:3000/Admin/100/jhanu?posts=10
    // {pathname: '/Admin/100/jhanu', search: '?posts=10', hash: '', state: null, key: 'default'}
    // ekkada string la vastundi denini access cheyali anthy
    let qp=new URLSearchParams(queryparams.search);
    let pages=qp.get('category')
     let pag=qp.get('posts')
     let {id,name}=useParams();
    return (
    <div>
        <h1> id: {id}</h1>
         <h1>name:{name}</h1>
        <h1> category:{pages}</h1>
        <h1> posts:{pag}</h1>
        {/* 2 okesari evali browser url lo iyithy & edi use cheyali */}
    </div>
)

}
export default Admin;