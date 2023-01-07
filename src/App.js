import './App.css'
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import React, { useState } from 'react';


function App() {
const empresa ="Softex"

const grandeEmpresa = empresa.toUpperCase()
const [count, setCount] = useState(0)


  return (
    <div className="App">
      <h1>Meu Projeto React</h1>
      <p>Emanuel Vital Falcão</p>
      <h2>Curso da {empresa}</h2>
      <p>Empresa em Maiuscula {grandeEmpresa}</p>
      <p>Soma {6+6+6}</p>
      <HelloWorld/>
      <Pessoa nome = "Emanuel"
              idade = "52"
              profissao = "Programador"
      />
      <p>Voce clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique Aqui
      </button>
    </div>
  );
}

export default App;
