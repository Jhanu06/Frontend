
// this is an example of props in functional component
// props are used to pass data from one component to another component

// function User(props)
// {
//    console.log(props)
//     return (
//  <div>
//     <h1> user name : {props.name} </h1>
//     <h1> user age : {props.age} </h1>
//  </div>
//     );
// }
// export default User // we need to use this in app.js so we r exporting here


// we can use props in class component also
// import React from 'react';
// class User extends React.Component{
//     //optional constructor method
//     // constructor(props)
//     // {
//     //     super(props) // this is used to call the constructor of parent class
//     //     this.state={}
//     // }
//     render()
//     {
//        return (
//         <div>
//             <h1> user name : {this.props.name} </h1>
//             <h1> user age : {this.props.age} </h1>
//         </div>
//        )
//     }
// }
// export default User 

//  using map 

// function User(props)
// {
//     return (
//  <div style={{border:'2px solid black',margin:'10px'}}>
//   <h1> ID: {props.id} </h1>
//     <h1> user name : {props.name} </h1>
//     <h1> user age : {props.age} </h1>
//  </div>
//     );
// }
// export default User 


// function User(props)
// {
//     return (
//  <div>
//     <h1> user name : {props.name} </h1>
//     <h1> user age : {props.age} </h1>
//     {/* to print the children of the component we use props.children */}
//  <h2>{props.children}</h2>
//  </div>
//     );
// }
// export default User

