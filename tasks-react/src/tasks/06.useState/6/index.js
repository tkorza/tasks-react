// 6. Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку
// текст должен появляться или исчезать

import { useState } from "react";

function Task6() {
    let isShowP = false
    const [p, setP] = useState('')
    function funcButton() {
        console.log(isShowP);
        if (isShowP === false) {
            setP('')
            isShowP = true
        } else {
            setP('text')
            isShowP = true
        }
    }

    return (
        <div>
            <p>{p}</p>
            <button onClick={funcButton}>Показать/Скрыть</button>
        </div>
    )
}
export default Task6

