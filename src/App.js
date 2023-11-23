import logo from './logo.svg';
import './App.css';
import Input from './components/input/Input'
import Button  from './components/button/Button';
import ToDoBox  from './components/to do box/ToDoBox';
import {useState} from 'react'
function App() {
  const [inpVal , setInpVal] = useState("")
  const [data , setData] = useState([])
  function removeFunction(toDoId){
    setData(data.filter(item => item.id != toDoId))
      
  }
  function aadTodo(){
    return data.length
  } 
  return (
    <div className="App">
      <header >
        <div className="to-do"><p>Todos</p></div>
        <div>
          <span className='number-complete'>2</span>
          <span>comp</span>
        </div>
        <div>
          <span className='number-complete'>{aadTodo()}</span>
          <span>total</span>
        </div>  
      </header>
      <div>
      <p>{console.log(data)}</p>
        <Input valueStatuse={inpVal} onchageHandler={(e) => setInpVal(e.target.value)}/>
      </div>
      <div>  
        <Button onclickHandler={() => {setData([...data,{id:Date.now() , text:inpVal}])
        setInpVal("")}
                                           
        }>+</Button>
      </div>
      <div>
        {data.map(item => {
          return(
            <ToDoBox text={item.text} removeToDo={removeFunction} id={item.id}/>
          )
        })}
      </div>
    </div>
  );
}
export default App;
