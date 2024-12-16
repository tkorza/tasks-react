
function JSX2() {
    const arr = [1, 4, 9, 16]
    const result = arr.map((el) => <h1>{el ** 0.5}</h1>)
    return (
        <div>
            <p>2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
                отобразить на странице в виде h1
            </p>
            <p>{result}</p>
        </div>
    )
}
export default JSX2