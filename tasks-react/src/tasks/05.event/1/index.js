// 1. Создайте компонент, который принимает статичный массив чисел и выводит в
// параграф информацию о положительности и отрицательности числа.

function JSX2_1() {
    const arr = [1, 2, 3, 4, 0]
    return (
        <div>
            {arr.map((el)=>{
                if(el>0) return <p>+ {el}</p>
                else return <p>{el}</p>
            })}
        </div>
    )
}

export default JSX2_1;