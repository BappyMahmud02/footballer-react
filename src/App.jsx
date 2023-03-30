import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Players from './components/Players/Players'
import Player from './components/Players/Players'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Players></Players>
    </div>
  )
}

export default App
