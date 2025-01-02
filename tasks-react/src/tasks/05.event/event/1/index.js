// 1. На входе переменная пароля. По клику на кнопку необходимо реализовать метод
// валидации. Написать регулярное выражение: пароль от 8 символов, содержит
// числа, буквы, !@#$^&*. Результат отобразить в консоль
function JSX3_1() {
    const password = ''
    function check() {
        try {
            console.log(password);
            if (!password) throw new Error('Ничего не введено!')
            console.log((/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$^&*])[A-Za-z\d!@#$^&*]{8,}$/).test(password));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button onClick={check}>Проверить</button>
        </div>
    )
}

export default JSX3_1