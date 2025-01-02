// 3. Создайте компонент, который принимает массив строк и фильтрует строки,
// оставляя только те, длина которых не превышает 10 символов.

function JSX2_3() {
    const arrStr = ['ssssssssssssssss', 'fff', 'ggggg', 'qqqqqqqqqqqqqqqqqqqqqqqq']
    return (
        <div>
            <p>
                {arrStr.filter((el) => {
                    if (el.length < 10) return true
                })}
            </p>
        </div>
    )
}
export default JSX2_3


