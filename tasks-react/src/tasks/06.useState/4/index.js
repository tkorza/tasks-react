// 4. Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать
// данные из двух input (2 разных state). Сравнить значения 2 input на равенство.
// Результат отображать в консоль

import { useState } from "react";

function Task4() {
    const [inp, setInp] = useState('')
    const [inp2, setInp2] = useState('')

    function updateP(e) {
        setInp(e.target.value)
    }
    function updateP2(e) {
        setInp2(e.target.value)
    }

    function isEmail() {
        console.log(inp === inp2);
    }
    return (
        <div>
            <input onChange={updateP}></input>
            <input onChange={updateP2}></input>
            <button onClick={isEmail}>click me</button>
        </div>
    )
}

export default Task4