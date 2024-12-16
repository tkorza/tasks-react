import logojs from '../4/logojs.jpg'
function JSX4() {
    const arr = ['sss', 'aaa', 'qqq', 'fff']
    const result = arr.map(el => <div><p>{el}</p><img src={logojs}></img></div>)
    return (
        <div>
            <p>4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
                массива, а также картинку. Каждая итерация будет возвращать
                {/* <div>
                    <p>el</p>
                    <img />
                </div> */}
            </p>
            {result}
        </div>
    )
}
export default JSX4