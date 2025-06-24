

import {combineReducers, createStore} from "redux" // manaki ekkda cross enduku vachindi redux toolkit anedi vachindi new di nduke
const initialState={
    balance:1000,
    fullName:"Madugula",
    mobile:null,
}

function accountreducer(state=initialState,action)
{
    if(action.type=="deposit")
    {
        return {...state,balance:state.balance + +action.payload} // ekkada ...state anthy paina unnavi obj values vastadi
        // unna bal ni update chestunnam mana payload value tho
    }
    else if(action.type==="withdraw")
    {
         return {...state,balance:state.balance - +action.payload} // value kinda convert avadam kosam a varaible mundu + petai anthy +"5"=5 avudi
    }
    else if(action.type==="mobileUpdate")
    {
        return {...state,mobile:action.payload}
    }
     else if(action.type==="nameUpdate")
    {
        return {...state,fullName:action.payload}
    }
     else if(action.type==="reset")
    {
        return initialState
    }
    else{
        return state
    }
}

// taking muultiple reducers

function transactionReducer(state=[],action)
{
    switch(action.type)
    {
        case "Add_Transaction":
            return [...state,{id:action.payload.id,amount:action.payload.amount,type:action.payload.type,date:action.payload.date}]
        default:
            return state;
    }
}

// when we want to combine both reducer function we use
let rootReducer=combineReducers(
    {
       account:accountreducer,
       transaction:transactionReducer
    }
)

const store=createStore(rootReducer)

// dispatch({type:"deposit",payload:100}) // ekkada pass chesina value reducer func ki action la velthadi
// dispatch({type:"withdraw",payload:100})
// dispatch({type:"mobileUpdate",payload:100})

//const store=createStore(accountreducer)

// console.log(store.getState())
// store.dispatch({type:"deposit",payload:1000})
// console.log(store.getState());
// store.dispatch({type:"withdraw",payload:100})
// console.log(store.getState());
// store.dispatch({type:"mobileUpdate",payload:9100672202})
// console.log(store.getState());
// store.dispatch({type:"nameUpdate",payload:"jhanu"})
// console.log(store.getState());
 export default store;




































// TODO app

// const data = {
//   todos: [],
//   nextId: 1
// };

// const todoReducer = (state = data, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       const newTodo = {
//         id: state.nextId,
//         title: action.payload.title
//       };
//       return {
//         ...state,
//         todos: [...state.todos, newTodo],
//         nextId: state.nextId + 1
//       };

//     case "EDIT_TODO":
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload.id
//             ? { ...todo, title: action.payload.title }
//             : todo
//         )
//       };

//     case "DELETE_TODO":
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload)
//       };

//     case "RESET":
//       return data;

//     default:
//       return state;
//   }
// };

// const store = createStore(todoReducer);

// export default store;
