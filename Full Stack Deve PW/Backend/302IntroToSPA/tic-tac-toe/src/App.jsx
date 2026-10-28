import { useState } from 'react'
import Grid from './Component/Grid/Grid'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
        <Grid numberOfCards={9} />
    </>
  )
}

export default App
