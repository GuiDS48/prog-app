import App from "../App"

function Dia() {
    function verificarDia() {
        let dia = prompt("digite o dia da semana(1...7)? ")
        dia = Number(Dia)

        //if (dia == 1) {
        //    alert("Domingo ")
        //} else if (dia == 2) {
        //    alert("Segunda ")
        //} else if (dia == 3) {
        //    alert("terça ")
        //} else if (dia == 4) {
        //    alert("quarta")
        //} else if (dia == 5) {
        //    alert("quinta")
        //} else if (dia == 6) {
        //    alert("sexta")
        //} else if(dia == 7) {
        //    alert("sabado")
        //}else{
        //    alert("f")
        //}






        switch (dia) {
            case 1: alert("Domingo ")
                break
            case 2: alert("Segunda ")
                break
            case 3: alert("Terça ")
                break
            case 4: alert("Quarta ")
                break
            case 5: alert("Quinta ")
                break
            case 6: alert("Sexta ")
                break
            case 7: alert("Sabado ")
                break
            default: alert9("eeeeeeeeeeeeeee")

        }


    }
    return (
        <div>
            <h2>oieeeeeeeee</h2>
            <button onClick={verificarDia}>clik</button>

        </div>
    )



}

export default App