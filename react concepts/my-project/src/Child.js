import Grandchild from "./Grandchild";

// function Child({b})
// {
//  return (
//   <div> 
//     <h1>
//      this is child component
//      <Grandchild c={b} ></Grandchild>
//     </h1>
//   </div>
//  )
// }
// export default Child;

function Child()
{
 return (
  <div> 
    <h1>
     this is child component
     <Grandchild></Grandchild>
    </h1>
  </div>
 )
}
export default Child;