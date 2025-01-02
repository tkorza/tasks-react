// 7. Создайте компонент, который принимает статичный массив элементов и
// присваивает каждому элементу случайный цвет фона. Выведите элементы с их
// цветами на странице.

function JSX2_7() {
    const arr = ['ppp', 'fff', 'ggg']
    return (
        <div>
            {arr.map((el) => {
                return <p style={{ backgroundColor: `#${Math.round(Math.random() * 1000)}` }}>{el}</p>
            })}
        </div>
    )
}
export default JSX2_7
