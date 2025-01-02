// 7. Создайте компонент с кнопкой и параграфом для отображения результата
// счетчика (изначально счетчик равен 0). Ваша задача так реализовать функционал,
// чтобы при клике на кнопку автоматически прибавлялась +1 к стейту счетчика
import { useState } from "react"
function Task7() {
    const [count, setP] = useState(0)
    function counter() {
        setP(count + 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={counter}>+1</button>
        </div>
    )
}
export default Task7