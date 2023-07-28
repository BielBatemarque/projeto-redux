import './App.css';
import { Card } from './Components/Card/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux</h1>
      <div className='linha'>
        <Card  children={'x'} title={'Card 1'} red/>
        <Card  children={'x'} title={'Card 2'} blue/>
      </div>

      <div className='linha'>
        <Card  children={'y'} title={'Card 1'} green/>
        <Card  children={'x'} title={'Card 2'} purple/>
      </div>
    </div>
  );
}

export default App;
