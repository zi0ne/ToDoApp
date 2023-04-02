import React from "react";
import { useState } from "react";
//import { isPropertySignature } from "typescript";

// props의 타입 설정해줘야함, props는 onAddTo 함수가 될 것임. React.FC가 제네릭 타입이기 때문에  제네릭 타입으로 지정해줘야함
// 그래서 item 문자열 타입의 인수를 받고 반환값은 없는 onAddTo함수를 정의하여 코드의 안정성을 높임
const InsertTodo: React.FC<{onAddTodo : (item: string) => void }>= (props) => {   // props 인자를 받아
    const [text,setText]= useState<string>(""); //1. 입력될 값의 useState
    
    const submitHandler = (e: React.FormEvent) => { //submithandler > 이벤트가 들어옴
        e.preventDefault(); //이벤트의 기본 동작을 취소하는 함수, 폼이 제출되는 동작을 막아 새로고침을 방지
        if(text.trim() !== ""){ // 문자 입력값이 공백이 아니라 값이 있다면, +) trim : 문자열 양 끝에 공백을 지워줌, 사용자가 공백을 실수로 넣을 수 있음을 방지
            props.onAddTodo(text); // onAddTodo 호출 (목록에 값 추가)
            setText(""); // 목록에 값 추가 후, 텍스트창 비워주기
        }
    };
    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);  // 입력된 값으로 현재 값 변경
    };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <h3>할 일 추가</h3>
                <input type = "text"  onChange={changeHandler}/>
                <button>추가</button>
            </form>
        </div>
    )
}

export default InsertTodo;