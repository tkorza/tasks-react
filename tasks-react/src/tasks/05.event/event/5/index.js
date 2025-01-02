// 5. Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку
// вычислите и выведите сумму всех чисел из массива в консоль.


function JSX3_5() {
    const arr = [1, 2, 2, 3, 4, 5]
    function sum() {
        console.log(arr.reduce((el, sum) => sum += el));
    }
    return (
        <div>
            <button onClick={sum}>Вычислить</button>
        </div>
    )
}
export default JSX3_5