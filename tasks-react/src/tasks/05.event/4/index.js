// 4. Создайте компонент, который принимает статичный массив чисел и строк. Если
// элемент - число, то отобразите его в параграфе с зеленым цветом текста, если
// строка - с синим.

function JSX2_4() {
    const arr = [1, 13, 24, 'fff', 'aaa', 'rrr']
    return (
        <div>
            {
                arr.map((el) => {
                    if (isNaN(el)) return <p style={{color:'blue'}}>{el}</p>
                    else return <p style={{color:'green'}}>{el}</p>
                })
            }
        </div>
    )
}
export default JSX2_4