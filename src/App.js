import './App.css';
import { Card } from './Components/Card/Card';
import { Intervalo } from './Components/Intervalo/Intervalo';


function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux</h1>
      <div className='linha'>
       <Intervalo></Intervalo>
      </div>

      <div className='linha'>
        <Card  children={'x'} title={'Card 2'} blue/>
        <Card  children={'y'} title={'Card 3'} green/>
        <Card  children={'x'} title={'Card 4'} purple/>
        
      </div>
    </div>
  );
}

export default App;
