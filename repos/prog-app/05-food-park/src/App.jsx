
import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import RestauranteGaucho from './pages/RestauranteGaucho'
import TioPave from './pages/TioPave'
//import Contato from './pages/Contato';
//import Produto from './pages/Produto';

function App() {
  const[tela, setTela] = useState(<Home />)


  return (
    <div className="cont-app">
      <header className={'cont-header'}>

        <nav>
          <button className={'botoes-nav'} onClick={() => setTela(<Home />)}>Home</button>
          <button className={'botoes-nav'} onClick={()=> setTela(<RestauranteGaucho />) }>Gaúcho</button>
          <button className={'botoes-nav'} onClick={()=> setTela(<TioPave/>) }>Pave</button>
        </nav>
      </header>
      <main className={'cont-main'}>
        {tela}
      </main>
    </div>
  )
}

export default App
