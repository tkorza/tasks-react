// 9. Дополните предыдущую задачу. Создайте компонент, который отображает
// счетчик и кнопку "Сброс". При нажатии на кнопку, счетчик должен сбрасываться в
// ноль. Используйте useState, чтобы управлять значением счетчика.


import { useState } from "react"
function Task9() {
    const [count, setP] = useState(0)
    function counterUp() {
        setP(count + 1)
    }
    function counterLow() {
        setP(count - 1)
    }
    function reset() {
        setP(0)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={counterUp}>+1</button>
            <button onClick={counterLow}>-1</button>
            <button onClick={reset}>Сброс</button>
        </div>
    )
}
export default Task9