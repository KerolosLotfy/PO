// import { useState } from 'react'
import './App.css'
import { Header, Logo } from './Components/Header'
import { Main } from './Components/Main'
import { Sidebar } from './Components/Sidebar'
// import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Logo />
      <Header />
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
