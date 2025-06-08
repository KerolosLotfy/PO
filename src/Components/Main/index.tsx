import './styles.css'
import OrangeLogo from '../../assets/Orange-Logo.png'
import { Outlet } from 'react-router-dom';





export const Home = () => {
  return (
    <>
    {/* <Logo /> */}
      <h1>Welcome</h1>
      <div className="img-container">
        <img src={OrangeLogo} alt="Orange Logo" className="logo" />
        <h2 className="logo-text">
          Orange Business Development Tools (BDTs) are designed to streamline and enhance business operations, providing a suite of tools for data analysis, project management, and customer relationship management.
        </h2>
      </div>
    </>
  )
}


export const Main = () => {
  return (
    <main className="main">
      <div className="main-content">
        <Outlet />
      </div>
    </main>
  )
}   
