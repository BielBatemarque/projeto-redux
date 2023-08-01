import { useState } from 'react';
import './App.css';
import { Intervalo } from './Components/Intervalo/Intervalo';
import { Media } from './Components/Media/Media';
import { Soma } from './Components/Soma/Soma';
import { Sorteio } from './Components/Sorteio/Sorteio';


function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);


  return (
    <div className="App">
      <h1>Exercicio React-Redux</h1>
      <div className='linha'>
       <Intervalo minimo={min} maximo={max} onMinChanged={setMin} onMaxChanged={setMax}></Intervalo>
      </div>

      <div className='linha'>
        <Media minimo={min} maximo={max}></Media>
        <Soma minimo={min} maximo={max}></Soma>
        <Sorteio minimo={min} maximo={max}></Sorteio>
      </div>
    </div>
  );
}

export default App;
