// we are writing all actions of redux in a function in this file

export function deposit(amount)
{
    return {
        type:"deposit",
        payload:amount
    }
}

export function withdraw(amount)
{
    return {
        type:"withdraw",
        payload:amount
    }
}
export function nameUpdate(fullName)
{
    return {
        type:"nameUpdate",
        payload:fullName
    }
}
export function mobileUpdate(mobile)
{
    return {
        type:"mobileUpdate",
        payload:mobile
    }
}


//  for TODO app

// export function ADD_TODO(todo)
// {
//     return {
//         type:"ADD_TODO",
//         payload:todo
//     }
// }
// export function EDIT_TODO(todo)
// {
//     return {
//         type:"EDIT_TODO",
//         payload:todo
//     }
// }
// export function DELETE_TODO(id)
// {
//     return {
//         type:"DELETE_TODO",
//         payload:id
//     }
// }