// 2. По событию изменения input отображать в консоль каждое вводимое значение


function JSX3_2() {
    function show(event) {
        let str = event.target.value
        console.log(str[str.length - 1]);
    }
    return (
        <div>
            <input onChange={show}></input>
        </div>
    )
}
export default JSX3_2