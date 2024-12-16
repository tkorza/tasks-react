function JSX3() {
    const arr = ['str@', 'str1', 'str3', 'str3@']
    return (
        <div>
            <p>3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
                странице только те строки, которые содержат знак @</p>
            {arr.filter((el) => el.includes('@'))}
        </div>
    )
}
export default JSX3