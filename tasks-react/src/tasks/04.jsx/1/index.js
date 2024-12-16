

function JSX1() {
    const arr = [1, 2, 3, 4, 5]
    const result = arr.map((el) =>  el ** 2 )
    return (
        <div>
            <p>1. На входе статичный массив чисел. Ваша задача каждое число массива возвести в квадрат и отобразить на странице </p>
            {result}
        </div>
    )
}

export default JSX1