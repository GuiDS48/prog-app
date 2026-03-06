 function Voto() {

    function processarIdade() {
        let idade = Number(prompt("Idade: "))
        if(idade < 16){
            alert("Não pode votar")
        }else if(idade == 16 || idade == 17){
            alert("Votar facutativo")
        }else if(idade >= 18 && idade <=65){
            alert("Voto obrigatorio")
        }

    }
    return (
        <div className={"voto-container"}>
            <h2>Idade pra votar</h2>
            <button onClick={processarIdade}>Processar Idade</button>

        </div>
    )
}

export default Voto