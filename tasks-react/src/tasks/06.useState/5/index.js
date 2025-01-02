// 5. Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в
// поле и нажатии на кнопку, компонент должен отображать приветственное
// сообщение с именем, введенным пользователем

import { useState } from "react";

function Task5() {
    const [inp, setInp] = useState('')

    function updateP(e) {
        setInp(e.target.value)
    }


    function hello() {
        alert(`Привет, ${inp}!`)
    }
    return (
        <div>
            <input onChange={updateP}></input>
            <button onClick={hello}>Привет</button>
        </div>
    )
}

export default Task5