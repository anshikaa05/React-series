import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 rounded-xl '>Tailwind test</h1>
      <Card username="Anshika Srivastava" btnText = "click me" />
      <Card username="Harshit Dixit" btnText = "view me" />
  </>
  )
}

export default App
