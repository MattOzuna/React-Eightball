import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EightBall from './components/EightBall'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EightBall />
    </>
  )
}

export default App
