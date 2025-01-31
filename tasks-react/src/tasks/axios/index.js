import axios from 'axios'
import { useState } from 'react'
function Axios() {
    const [infoIP, setInfoIP] = useState('')
    async function ax() {
        const res = await axios.get('https://api.ipify.org/?format=json')
        console.log(res);
        setInfoIP(res.data.ip)

    }

    return (
        <div>
            <button onClick={ax}>клик</button>
            <h1>{infoIP}</h1>
        </div>
    )
}

export default Axios