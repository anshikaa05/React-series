import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

//  const handleClick = ()=>{
//   setCount(count+1);
//  }

  return (
    <>
      <h1>Calculator</h1>
      <h2>Current Value : {count}</h2>
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
       onClick={()=>setCount(count + 1)}
      >Increase</button>
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
       onClick={()=>setCount(count - 1)}
      >Decrease</button>
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
       onClick={()=>setCount(0)}
      >Reset</button>
    </>
  )
}

export default App
