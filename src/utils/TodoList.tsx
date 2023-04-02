class Todo {
    id: string
    text: string

    constructor(todoText: string) { // todoText로 string 타입을 받아온다.
        this.id = String(new Date().getTime()) // id를 현재 시간을 밀로초단위 문자열로 반환하여 할당 >> 매개변수(list의 할 일)이 각각 고유한 id를 갖게되는 셈
        this.text = todoText // 매개변수 todoText
    }
}

export default Todo