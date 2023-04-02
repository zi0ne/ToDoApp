import React from "react";
import Todo from "../utils/TodoList";
interface TodosProps{
    items: Todo[];
}

const Todos: React.FC<TodosProps> = (props) => {
        return(
            <ul>
                {props.items.map((item)=>(
                    <li key={item.key}>{item.text}</li>
                ))}
            </ul>
        );
    };

    export default Todos;