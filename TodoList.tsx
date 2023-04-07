// import React, { useState, useEffect } from "react";

// export interface Todo {
//   id: number;
//   text: string;
//   done: boolean;
// }


// export interface TodoListProps {
//   todos: Todo[];
//   onAddTodo?:(text:string)=> void;
//   onDeleteTodo: (id: number) => void;
//   onToggleDone: (id: number) => void;
// }


// const TodoList: React.FunctionComponent<TodoListProps> = ({ todos, onAddTodo, onDeleteTodo,onToggleDone }) => {
//   const handleDeleteTodo = (id: number) => {
//     onDeleteTodo(id);
//   };

//   const handleTodoDoneToggle = (id: number) =>{
//     onToggleDone(id);
//   }
  

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           <input
//             type="checkbox"
//             checked={todo.done}
//             onChange={() => handleTodoDoneToggle(todo.id)}
//           />
//           {todo.text} - {todo.done ? "done" : "not done"}
//           <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//         </li>
//       ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;





import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import "./component.css";

// Todo 항목 인터페이스 (id,text, done의 속성을 갖음)
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

//Props 인터페이스, 함수 속성을 포함
export interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void; // 항목 삭제
  onToggleDone: (id: number) => void; // 항목의 상태 토글
}

 //현재 날짜 문자열 생성 함수
 const getCurrentDate = () =>{
  const today = new Date();
  const year = today.getFullYear();
  const month = `${today.getMonth()+1}`.padStart(2,'0');
  const date = `${today.getDate()}`.padStart(2,'0');
  return`(${year}. ${month}. ${date})`;
}

const TodoList: React.FunctionComponent<TodoListProps> = ({
  onToggleDone,
  onDeleteTodo,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]); // 배열 형태의 Todo 객체를 가진 배열을 사용

  // useEffect를 사용하여 컴포넌트가 처음 렌더링 될 때, 서버에서 todo를 받아와 상태로 설정
  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  
  //TodoForm 컴포넌트에서 입력된 값을 서버에 POST 요청으로 보내고, 서버에서 응답받은 데이터를 상태에 추가
  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,//id 는 고유한 값이어야하므로 길이에 +1 한 값을 주어 각각이 고유한 값을 갖도록 함
      text,
      done: false,
    };
    fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo), // 새로운 항목을 JSON형식으로 변환하여 바디로 보냄
    })
      .then((response) => response.json()) //응답을 받았다면, JSON 데이터를 파싱
      .then((data) => setTodos([...todos, data])); //todo 항목 배열에 추가
  };

// 항목의 완료,미완료 상태를 보여주는 함수, 인자로 id가 들어가고 이는 number타입임
  const handleTodoToggle = (id: number) => {
 
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {     //todo 배열에서 해당 id의 todo를 찾기
        return { ...todo, done: !todo.done }; 
      }
      return todo; //done의 반대로 설정한 후
    });
    setTodos(updatedTodos); // 업데이트 된 todo배열을 setTodo 상태로 저장
    fetch(`http://localhost:4000/todos/${id}`, { //업데이트 할 항목의 url
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: !todos.find((todo) => todo.id === id)?.done }), // 업데이트 할 값을 JSON 형식으로 보내기
      // 이전 상태에 따라서 값을 바꾸기 위해서 현재 todo의 done값이 아닌,이전에 저장된 todo의 done값을 반대로 설정하는 것
    });
  };

  // 항목을 삭제하기 위한 함수 id: number 타입을 인자로 받음
  const handleDeleteTodo = (id: number) => {
    //filter를 통해 id에 해당하는 항복을 제거시킴
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos); //항목 업데이트
    //해당 url을 fetch하여 삭제시킴
    fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    });
  };


  //
  return (
    <div className="construct">
      <div className="header">
        <span className="rowDiv">
        <h1>Todo List</h1>
        <h3>{getCurrentDate()}</h3>
        </span>
        <TodoForm onAdd={handleAddTodo} />
      </div>
      <div className="list">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleTodoToggle(todo.id)}
              />
              {todo.text} - {todo.done ? "done " : "not done "}
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
