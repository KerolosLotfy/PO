// import { useState } from 'react'
import './App.css'
import { Header, Logo } from './Components/Header'
import { Main } from './Components/Main'
import { Sidebar } from './Components/Sidebar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  // const [count, setCount] = useState(0)

  return (
  <Router basename={'/'}>
    <div className="App">
      <Header />
      <Logo />
      <Sidebar />
      <Main />
    </div>
    <Routes>
      {/* <Route path="/" element={<Main />} /> */}
      </Routes>
  </Router>

  )
}

export default App
