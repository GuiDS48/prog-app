import { useState } from 'react'

function Pum() {
    const [resultado, setresultado] = useState('')
    const [inputN, setInpuntN] = useState('')
    function gerarPum() {
        let texto = ''
        let pums = 0
        let i = 1
        while (pums < InputN) {
            if (i % 4 != 0) {
                texto += i + ''
            } else {
                texto += 'Pum'
                pums++
                console.log(pums);
            }
            i++
        }
        setresultado(texto)
    }


    return (
        <div>
            <input type="text"
                valeu={inputN}
                onChange={(e) => setInpuntN(e.target.value)}
            />
            <button onClick={gerarPum}>Pum</button>
            {resultado}
        </div>
    )
}

export default Pum
