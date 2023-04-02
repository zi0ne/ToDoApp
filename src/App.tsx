import React from 'react';
import {TodoListItem} from './component/Todo';
import InsertTodo from './component/InsertTodo';
import Todos from "./component/Todos";
import Todo from "./utils/TodoList";

function App(){
  const todos =[new Todo("스터디하기"), new Todo("퇴실버튼 누르기")];

  const addTodoHandler = (item: string) =>{

  }

  return(
    <div>
    <InsertTodo onAddTodo = {addTodoHandler}/>
    <Todos items={todos}/>
    </div>
  )
  }
export default App;
