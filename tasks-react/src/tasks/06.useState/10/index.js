// 10. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
// state, первоначальное значение которого {name: ‘’, surname: ‘’}. Проверить
// значения 2 input на пустоту. Структура state:
import { use, useState } from "react"
function Task10() {
    const [form, setForm] = useState({ name: '', surname: '' })
    function collect() {
        console.log(form.name);
        console.log(form.surname);
    }
    function setName(e) {
        setForm(form.name = e.target.value)
    }
    function setSurname(e) {
        setForm(form.surname = e.target.value)
    }
    return (
        <div >
            <input placeholder="name" onChange={setName}></input>
            <input placeholder="surname" onChange={setSurname}></input>
            <button onClick={collect}>collect</button>
        </div>
    )
}

export default Task10
