import { useState } from 'react'
import Login from "./components/account/Login"  // IF YOU WANT TO GO BACK FROM YOUR FOLDER THEN .. else .

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Login/>
   </div>   
  )
}

export default App
