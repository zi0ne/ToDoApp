import React from 'react';

interface TodoListItemProps{
    todo : {
        text : string,
        complete: boolean;
    }
}

// const todo = () =>{
//     return(
//         <ul>
//         <li>집에 가기</li>
//         <li>침대에 눕기</li>
//     </ul>
//     );
// };

export const TodoListItem: React.FC<TodoListItemProps> = ({todo}) =>{
    return <li>
        <label className = {todo.complete ? "complete" : undefined}>
        <input type="checkbox" checked = {todo.complete}/>
        {todo.text}
        </label> </li>     
};