// 3. По нажатию на enter в input onKeyDown выявлять является ли введенное слово
// палиндромом. Результат проверки отобразить в консоль


function JSX3_3() {
    function isPalindrom(event) {
        if (event.key === 'Enter') {
            try {
                if (event.target.value.length === 0) throw new Error('Ничего не введено')
                if (event.target.value.split('').reverse().join('') === event.target.value) console.log('Палиндром');
                else console.log('Не палиндром');
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div>
            <input onKeyDown={isPalindrom}></input>
        </div>
    )
}
export default JSX3_3