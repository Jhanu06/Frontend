// function Greatchild({d})
// {
//  return (
//   <div> 
//     <h1>
//       this is greatchild component
//     </h1>
//     {/* <h2> Adminlogin:{d}</h2> */}
//   </div>
//  )
// }
// export default Greatchild;

import { useContext } from 'react';
import {context} from './index'
function Greatchild({data})
{
    // to use that hook we use
    let val=useContext(context);
 return (
  <div> 
    <h1>
      this is greatchild component
    </h1>
    <h2> Username : {val.name} </h2>
    <h2> Age : {val.age} </h2>
  </div>
 )
}
export default Greatchild;
