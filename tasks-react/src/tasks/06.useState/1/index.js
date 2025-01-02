// 1. Создайте компонент с полем ввода и параграфом. При вводе данных в input
// отображать вводимое значение в параграф текущей страницы
import { useState } from "react"
function Task1() {
    const [inp, setInp] = useState('')
    function updateP(e) {
        setInp(e.target.value)
    }
    return (
        <div>
            <p>{inp}</p>
            <input onChange={updateP}></input>
        </div>
    )
}

export default Task1