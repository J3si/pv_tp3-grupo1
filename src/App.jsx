import { useState } from 'react'
import './App.css'
import Listanombres from './Listanombre.jsx'
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <Listanombres count={count} setCount={setCount} />
        <p>Contador: {count}</p>

    </>
  )
}

export default App
