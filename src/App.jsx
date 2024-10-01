import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const click1 = () =>{
    setCount(count+1);
  };

  const click2 = () =>{
    setCount(count-1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <div>
      <button>Count is {count}</button>
      </div>
      <div className="card">
        <button onClick={click2}>-</button>
        <button onClick={click1}>+</button>
      </div>
      
    </>
  )
}

export default App
