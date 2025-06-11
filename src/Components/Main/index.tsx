import './styles.css'
import OrangeLogo from '../../assets/Orange-Logo.png'
import { Outlet } from 'react-router-dom';
import { Signin } from '../Signin';





export const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
    <div className="home-container">
    {/* <Logo /> */}
      <div className="img-container">
        <img src={OrangeLogo} alt="Orange Logo" className="logo" />
        <p className="logo-text">
          Orange Business Development Tools (BDTs) are designed to streamline and enhance business operations, providing a suite of tools for data analysis, project management, and customer relationship management.
        </p>
      </div>
      <Signin/>
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
