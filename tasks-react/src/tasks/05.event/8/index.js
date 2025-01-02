// 8. Реализуйте компонент, который принимает статичный массив и отображает
// только уникальные значения, убирая повторяющиеся.

function JSX2_8() {
    const arr = [1, 2, 4, 4, 5, 6, 6, 7]
    let newArr = []
    arr.forEach((el) => {
        if (!newArr.includes(el)) newArr.push(el)
    })
    return (
        <div>
            {newArr.map((el) => <p>{el}</p>)}
        </div>
    )
}
export default JSX2_8