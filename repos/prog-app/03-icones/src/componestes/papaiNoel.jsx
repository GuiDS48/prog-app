import { useState } from 'react'

function PapaiNoel() {
    const [falaPapaiNoel, setfalaPapaiNoel] = useState("")
    const [result, setResult] = useState("")

    function calculoHoHoHo() {
        let quantidade = Number(falaPapaiNoel)
        let texto = ""

        for (let x = 0; x < quantidade; x++) {
            texto += "Ho "
        }
        texto += "!"
        
        setResult(texto)
    }

    return (
        <div>
            <input
                type="number"
                value={falaPapaiNoel}
                onChange={(e) => setfalaPapaiNoel(e.target.value)}
            />
            <button onClick={calculoHoHoHo}>Mostra ho ho</button>

            <p>{result}</p>
        </div>
    )
}

export default PapaiNoel