function JSX5() {
    const arr = [1, 2, 'ff', 4, 'ss']
    let result = []
    arr.forEach((el) => {
        if (!isNaN(el)) {
            if (el % 2 === 0) result.push('четное')
            else result.push('нечетное')
        } else result.push(el)
    })
    return (
        <div>
            <p>5. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в
                случае числа четность и нечетность текущего значения в параграфе, в случае
                строки отобразить саму строку в параграфе</p>
            {result}
        </div>
    )
}

export default JSX5