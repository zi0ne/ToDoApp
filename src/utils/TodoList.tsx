class Todo {
    id: string
    text: string
    key: string

    constructor(todoText: string) { // todoText로 string 타입을 받아온다.
        this.id = String(new Date().getTime()) // id를 현재 시간을 밀로초단위 문자열로 반환하여 할당 >> 매개변수(list의 할 일)이 각각 고유한 id를 갖게되는 셈
        this.text = todoText // 매개변수 todoText
        this.key = this.id
    }
}

export default Todo

/*
할 일 목록을 클래스화 하면 코드의 가독성을 높일 수 있고, 유지 보수성이 좋아진다.(새로운 기능을 추가하기 쉽고, 기능이 변경되었을 때 클래스 내부 코드만 수정하면 되기 때문)
재사용성이 높아지고, 타입 안전성이 높아진다(TS와 같은 정적 타입 언어를 사용하여 클래스를 작성하면 컴파일 시점에서 오류 발견이 많다.)
 */