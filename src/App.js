import logo from './logo.svg';
import './App.css';
import Input from './components/input/Input'
import Button  from './components/button/Button';
import ToDoBox  from './components/to do box/ToDoBox';
import {useState} from 'react'
function App() {
  const [inpVal , setInpVal] = useState("Input here and return to add...")
  const [data , setData] = useState([])
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
      <div>
        <Input valueStatuse={inpVal} onchageHandler={(e) => setInpVal(e.target.value)}/>
      </div>
      <div>  
        <Button onclickHandler={() => setData([...data,inpVal])}>+</Button>
      </div>
      <div>
        {data.map(item => {
          return(
            <ToDoBox text={item}/>
          )
        })}
      </div>
    </div>
  );
}
export default App;
