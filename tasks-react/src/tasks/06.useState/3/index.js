// 3. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
// данные из input и проверить вводимую строку на почту. Результат отображать в
// консоль
import { useState } from "react";

function Task3() {
    const [inp, setInp] = useState('')

    function updateP(e) {
        setInp(e.target.value)
    }

    function isEmail() {
        console.log((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(inp));
    }
    return (
        <div>
            <input onChange={updateP}></input>
            <button onClick={isEmail}>click me</button>
        </div>
    )
}

export default Task3