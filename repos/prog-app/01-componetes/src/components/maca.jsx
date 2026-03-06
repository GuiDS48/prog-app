import { useState } from "react"

function Maca() {
    const[saida, setSaida]= useState(' ')



    function compraDeMaca() {
        let preco
        let qnt = Number(prompt("Quantas mças: "))

       if(qnt < 12){
        preco = 0.3
       }else{
        preco = 0.25
       }

        let valor = qnt * preco
        //alert("Valor: r$"+ valor.toFixed(2))
        //saida = 'muitas mçãs,muita mesmo'
        setSaida('$',valor)
    }


    return (
        <div>
            <h2>Mças custa 0,30</h2>
            <p>
                Resultado: {saida}
            </p>
            <button onClick={compraDeMaca}>compra</button>
        </div>
    )
}

export default Maca