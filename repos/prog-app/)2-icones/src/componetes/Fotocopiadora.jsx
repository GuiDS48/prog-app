// nao deu
function Fotocopiadora() {
    function calculoCopia() {
        let numCopia = Number(prompt("Quantas copias vc quer: "))
        let preco = 0

        for (let x = 0; x <= 500; x++) {
            preco += numCopia * 0.33

        }
        prompt("quantidade de copia" + numCopia + ":" + preco.toFixed(2))

    }

    return (
        <div>
            <h2>copia</h2>
            <button onClick={calculoCopia}>calculo</button>
        </div>
    )
}

export default Fotocopiadora