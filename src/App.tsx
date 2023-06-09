import React, {useState} from 'react';
import InsertTodo from './component/InsertTodo';
import Todos from "./component/Todos";
import Todo from "./utils/TodoList";

function App(){
  const [todos, setTodos] = useState<Todo[]>([]); // TS에서 useState를 사용할 때 상태의 타입을 명시해주는것이 좋다.

  const addTodoHandler = (item: string) =>{
    const newTodo = new Todo(item);

    setTodos((prev) => {
      return [...prev, newTodo];
    });
  }
  
  const removeTodoHandler = (id: string) =>{
    setTodos((prev) =>{
      return prev.filter((todo) => todo.id !== id);
    });
  };
  

  return(
    <div>
    <InsertTodo onAddTodo = {addTodoHandler}/>
    <Todos items={todos} onRemoveTodo = {removeTodoHandler}/>
    </div>
  )
  }
export default App;
