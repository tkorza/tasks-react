// 2. Реализуйте компонент, который принимает статичный массив чисел и выводит
// минимальное и максимальное значения на странице.
function JSX2_2() {
    const arr = [2, 2, 3, 4, 5 - 6, 20, -8]
    return (
        <div>
            <p>
                {
                    arr.reduce((mi = Infinity, el) => {
                        if (el < mi) mi = el
                        return mi
                    })
                }
            </p>
            <p>
                {
                    arr.reduce((ma = -Infinity, el) => {
                        if (el > ma) ma = el
                        return ma
                    })
                }
            </p>
        </div>
    )
}

export default JSX2_2