// 2. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
// данные из input и проверить вводимую строку на палиндром. Результат
// отображать в консоль
import { useState } from "react"
function Task2() {
    const [inp, setInp] = useState('')
    function updateP(e) {
        setInp(e.target.value)
    }

    function isPalindrom() {
        if (inp === inp.split('').reverse().join('')) console.log(true);
        else console.log(false);
    }
    return (
        <div>
            <input onChange={updateP}></input>
            <button onClick={isPalindrom}>click me</button>
        </div>
    )
}
export default Task2