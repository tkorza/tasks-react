// 6. Создайте компонент с массивом элементов и кнопкой. При каждом клике на
// кнопку выбирайте случайный элемент из массива и отображайте его в консоль.

function JSX3_6() {
    const arrElem = [1, 2, 'dd', 11, 'gg']

    function getRandomElem() {
        console.log(arrElem[Math.round(Math.random(1) * arrElem.length)]);
    }
    return (
        <div>
            <button onClick={getRandomElem}>Выбрать</button>
        </div>
    )
}

export default JSX3_6