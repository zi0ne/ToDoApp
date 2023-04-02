import React from "react";
import { useState } from "react";

const InsertTodo = () => {
    const [text,setText]= useState("");
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
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