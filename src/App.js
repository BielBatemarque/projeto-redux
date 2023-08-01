import './App.css';
import { Intervalo } from './Components/Intervalo/Intervalo';
import { Media } from './Components/Media/Media';
import { Soma } from './Components/Soma/Soma';
import { Sorteio } from './Components/Sorteio/Sorteio';


function App(){
  return(
    <div className="App">
      <h1>Exercicio React-Redux</h1>
      <div className='linha'>
        <Intervalo></Intervalo>
      </div>
      <div className='linha'>
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
  </div>
  );
}
export default App;
