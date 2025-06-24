import Child from './Child'
// function Parent({data})
// {
//  return (
//   <div> 
//     <h1>
//       this is parent component
//     </h1>
//     {/* // i need this comp in greatchild
//     <h1> Admin:{data}</h1> */}
//     <Child b={data}></Child>
//   </div>
//  )
// }
// export default Parent;

function Parent()
{
 return (
  <div> 
    <h1>
      this is parent component
    </h1>
    {/* // i need this comp in greatchild
    <h1> Admin:{data}</h1> */}
    <Child ></Child>
  </div>
 )
}
export default Parent;