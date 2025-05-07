import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [second, setsecond] = useState(0)
  const [isRunning, setisRunning] = useState(true);
  
  useEffect(()=>{
        
  },[isRunning]);

  return (
    <>
      <h1>Timer</h1>
      <button onClick={start}>Play</button>
      <button onClick={stop}>Pause</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
