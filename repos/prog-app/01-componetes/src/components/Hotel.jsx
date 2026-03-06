function Hotel() {

    function cobraDiaria() {
        let preco = 0
        let qntDeDia = Number(prompt("Quantos dias vc ficou: "))
        let Valorbruto = 100

        let desconto10 = Valorbruto * 10/100
        let desconto15 = Valorbruto * 15/100        


        if (qntDeDia <= 5) {
            preco = 100
        } else if (qntDeDia >= 6 && qntDeDia <= 10) {
            preco = 90
        } else if (qntDeDia >= 11) {
            preco = 80
        }


        let valor = qntDeDia * preco - desconto10 - desconto15 + 150
        alert("Valor: r$" + valor.toFixed(2))

    }



    return (
        <div>
            <h2>Custo da diaria</h2>
            <button onClick={cobraDiaria}>Pagar</button>


        </div>
    )
}

export default Hotel