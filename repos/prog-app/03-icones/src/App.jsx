import { useState } from 'react'
import './App.css'
import './componestes/Calibragem'
import Calibragem from './componestes/Calibragem';
import papaiNoel from './componestes/papaiNoel';

function App() {
  const [inputNome, setInputNome] = useState('')

  function cadastrar(){
    console.log("cadastrando "+ inputNome)
  }

  return (
    <>
      <h1>oieeee</h1>
      Nome <input type="text"
        value={inputNome} 
        onChange={(e) => setInputNome(e.target.value)}
      />
      <button onClick={cadastrar}>Cadastro</button>
      <Calibragem />
      <papaiNoel />

    </>
  )
}

export default App
