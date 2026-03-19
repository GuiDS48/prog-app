import { useState } from "react"


function Calibragem() {
    const [pressaoDesejada, setPressaoDesejada] = useState("");
    const [pressaoLida, setPressaoLida] = useState("");
    const [resultado, setResultado] = useState(null);

    function calcularDiferença() {
        const diferenca = pressaoDesejada - pressaoLida;
        setResultado(diferenca);
    }

    return (
        <div>
            <h2>calculo</h2>
            pressao Desejada <input
                type="number"
                value={pressaoDesejada}
                onChange={(e) => setPressaoDesejada(e.target.value)}
            />
            <br />
            Pressão Lida<input
                type="number"
                value={pressaoLida}
                onChange={(e) => setPressaoLida(e.target.value)}
            />
            <br />
            <button onClick={calcularDiferença}>Calibragem</button>
            {resultado}
        </div>
    )
}

export default Calibragem
