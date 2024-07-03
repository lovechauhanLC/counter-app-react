import { useState } from 'react'
import './App.css'

function App() {
  const[counter,setCounter] = useState(10)

  
  const addValue = () => {
    if(counter<20){   
      setCounter(counter+1);
    }
  }

  const subValue = () => {
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <div>
      <h1>Count is: {counter}</h1>
      <button onClick={addValue} >Increase count</button>
      <button onClick={subValue} >Decrease count</button>
      <p>Counter maximum value : 20</p>
      <p>Counter minimum value : 0</p>
    </div>
  )
}

export default App
