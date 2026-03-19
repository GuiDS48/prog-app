import { useState } from 'react'
import './App.css'
import Calibragem from'./componestes/Calibragem';
import PapaiNoel from './componestes/PapaiNoel';
import Pum from './componestes/Pum'

function App() {
  const [inputNome, setInputNome] = useState('')

  function cadastrar() {
    console.log("cadastrando " + inputNome)
  }

  return (
    <>
      Nome <input type="text"
        value={inputNome}
        onChange={(e) => setInputNome(e.target.value)}
      />
      <button onClick={cadastrar}>Cadastro</button>
      <h3>---------------------</h3>
      <Calibragem />
      <h3>---------------------</h3>
      <PapaiNoel />
      <h3>---------------------</h3>
      <Pum />
      <h3>---------------------</h3>

    </>
  )
}

export default App
