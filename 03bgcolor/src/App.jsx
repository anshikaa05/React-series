import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <h1>Background Changer: {color}</h1>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white shadow-md z-500">
      <div className="max-w-7xl mx-auto px-7 py-3 flex justify-around items-center">
        <button onClick={()=> setColor("blue")}className="text-sm font-medium hover:bg-gray-700 px-8 py-4 rounded" style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={()=> setColor("green")}className="text-sm font-medium hover:bg-gray-700 px-8 py-4 rounded" style={{backgroundColor: "green"}}> Green</button>
        <button onClick={()=> setColor("black")}className="text-sm font-medium hover:bg-gray-700 px-8 py-4 rounded" style={{backgroundColor: "black"}}> Black</button>
        <button onClick={()=> setColor("white")}className="text-sm font-medium hover:bg-gray-700 px-8 py-4 rounded" style={{backgroundColor: "white"}}> White</button>
        <button onClick={()=> setColor("yellow")}className="text-sm font-medium hover:bg-gray-700 px-8 py-4 rounded" style={{backgroundColor: "yellow"}}> Yellow</button>
        <button onClick={()=> setColor("red")}className="text-sm font-medium hover:bg-gray-700 px-8 py-4 rounded" style={{backgroundColor: "red"}}> Red</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
