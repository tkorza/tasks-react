// 4. Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой цвет
// в соответствии с массивом цветов ['red', 'white', 'blue']. Используйте рандомный
// выбор цвета из массива при каждом клике.

function JSX3_4() {
    const arrColor = ['red', 'green', 'blue']
    let colorIndex = 0
    function changeColor() {
        colorIndex = Math.round(Math.random() * arrColor.length)
    }
    return (
        <div>
            <p style={{ color: `${arrColor[colorIndex]}` }}>Компонент</p>
            <button onClick={changeColor}></button>
        </div>
    )
}
export default JSX3_4