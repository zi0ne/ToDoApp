import React from "react";

interface TodoItemProps {
    key: string;
    text: string;
    id: string;
    onRemoveTodo:(id: string) => void;
}

const TodoItem : React.FC<TodoItemProps>
=(props)=>{
    return(<li onClick={() => props.onRemoveTodo(props.id)}>
    {props.text}
  </li>
    );
};

export default TodoItem;