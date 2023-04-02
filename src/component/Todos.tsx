import React from "react";
import Todo from "../utils/TodoList";
import TodoItem from "./TodoItem"

interface TodosProps{
    items: Todo[];
    onRemoveTodo: (id: string) => void;
}

const Todos: React.FC<{items: Todo[];
onRemoveTodo: (id: string) => void
}> = (props) => {
        return(
            <ul>
                {props.items.map((item)=>(
                    <TodoItem 
                    key={item.key} 
                    text={item.text} 
                    id={item.id} 
                    onRemoveTodo = {props.onRemoveTodo} />
                ))}
            </ul>
        );
    };

    export default Todos;