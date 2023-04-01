import React from 'react';
import {TodoListItem} from './component/Todo';
import InsertTodo from './component/InsertTodo';

const todos: Array<Todo> = [
  {text: "집에 가기", complete: true}, {text: "침대에 눕기", complete: false}
];

const App: React.FC = () => {
  return(
    <div>
    <InsertTodo />
    <ul>
    <React.Fragment>
      <TodoListItem todo={todos[0]}/>
      <TodoListItem todo={todos[1]}/>
    </React.Fragment>
    </ul>
    </div>
  )
}

export default App;
