import React from "react";

const InsertTodo = () => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <h3>할 일 추가</h3>
                <input type = "text" />
                <button>추가</button>
            </form>
        </div>
    )
}

export default InsertTodo;