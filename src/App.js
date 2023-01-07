import './App.css'
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';

function App() {
const empresa ="Softex"

const grandeEmpresa = empresa.toUpperCase()

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
    </div>
  );
}

export default App;
