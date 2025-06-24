import Greatchild from "./Greatchild";
// function Grandchild({c})
// {
//  return (
//   <div> 
//     <h1> this is grandchild component</h1>
//     <h2> Adminlogin:{c}</h2>
//     <Greatchild></Greatchild>
//   </div>
//  )
// }
// export default Grandchild;

function Grandchild()
{
 return (
  <div> 
    <h1> this is grandchild component</h1>
    <Greatchild></Greatchild>
  </div>
 )
}
export default Grandchild;