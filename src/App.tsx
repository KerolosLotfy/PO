import { useState } from 'react'
import './App.css'
import { Header, Logo } from './Components/Header'
import { Main , Home} from './Components/Main'
import { ExcelManager } from './Components/ExcelManager'
import { Sidebar } from './Components/Sidebar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  const [isAuth, IsAuth] = useState(false)

  return (
  <Router basename={'/'}>
    <div className="App">
      <Header />
      <Logo />
      <Sidebar />  
    <Routes>
      <Route path="/" element={<Main />} >
        <Route path="/" element={<Home />} />
        <Route path="Auto-BDTs" element={<ExcelManager />} />

      </Route>
      </Routes>
    </div>
  </Router>

  )
}

export default App
