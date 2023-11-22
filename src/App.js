import logo from './logo.svg';
import './App.css';
import Input from './components/input/Input'
import {useState} from 'react'
function App() {
  const [inpVal , setInpVal] = useState("Input here and return to add...")
  return (
    <div className="App">
      <header >
        <div className="to-do"><p>Todos</p></div>
        <div>
          <span className='number-complete'>2</span>
          <span>comp</span>
        </div>
        <div>
          <span className='number-complete'>7</span>
          <span>total</span>
        </div>
        
      </header>
      <Input valueStatuse={inpVal} onchageHandler={(e) => setInpVal(e.target.value)}/>
    </div>
  );
}

export default App;
