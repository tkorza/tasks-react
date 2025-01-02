// 8. Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом
// для отображения результата счетчика (изначально счетчик равен 0). Ваша задача
// так реализовать функционал, чтобы при клике на кнопку +1 автоматически
// прибавлялась +1 к стейту счетчика, а при клике на кнопку -1, происходило
// вычитание значения 1

import { useState } from "react"
function Task8() {
    const [count, setP] = useState(0)
    function counterUp() {
        setP(count + 1)
    }
    function counterLow() {
        setP(count - 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={counterUp}>+1</button>
            <button onClick={counterLow}>-1</button>

        </div>
    )
}
export default Task8