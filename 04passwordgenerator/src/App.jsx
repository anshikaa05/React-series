import { useCallback, useState,useEffect,useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [Number, setNumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const [password, setpassword] = useState("")

  // useref Hook
  const passwordref = useRef(null);

  const copypasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)
  },[password])

  const passwordgenrator = useCallback(() => {
     
         let pass =""
         let str ="ABCDEFGHEIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
         
         if (Number) str+="0123456789"
         if(character) str+="!@#$%^&*(){}[]"

         for (let i = 1; i <=length; i++) {
          let char = Math.floor(Math.random()*str.length +1)
          pass += str.charAt(char);
        }
         setpassword(pass)
          
        },[length,Number,character,setpassword])   
  

 useEffect(() => {
  passwordgenrator();
 }, [length,Number,character,passwordgenrator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg
       px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-white text-center'>Password generator</h1><br></br>
        <div className="flex-shadow rounded-lg overflow-hidden mb-8">
          <input 
          type="text"
          value = {password}
          className="outline-amber-50 w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordref}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copypasswordtoClipboard}>
          copy
          </button>
          
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) =>{setlength(e.target.value)}}
            />
            <label>Length: {length}</label>
            
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecke={Number}
            id = "numberInput"
            onChange={(e) =>{setNumber((prev) => !prev)}}
            />
            <label>Numbers</label>
            
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecke={character}
            id = "characterInput"
            onChange={(e) =>{setcharacter((prev) => !prev)}}
            />
            <label htmlFor='characterInput'>Characters</label>
            
          </div>
        </div>
       

       </div>

      
    </>
  )
}

export default App
