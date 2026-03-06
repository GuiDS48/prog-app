
function Entrevista() {
    function calcular() {
        let num = Number(prompt("Qual taboada vc quer: "))
        let cal = 0

        for (let x; x = 0 <= 10; x++) {
            cal = num * x

            alert(x + "x" + num + "=" + cal + "\n")
        }
        
    }

    return (
        <div>
            <h2>tabuada</h2>
            <button onClick={calcular}>calcular</button>
            {false && <p>gg</p>}

        </div>
    )
}

export default Entrevista