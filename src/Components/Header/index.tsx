import OrangeLogo from '../../assets/Orange-Logo.png'
import './styles.css'
import { Outlet,NavLink } from "react-router-dom";

export const Logo = () => {
    return (
        <div className="logo-container">
            <img src={OrangeLogo} alt="Orange Logo" className="logo" />
            <p className="title">Orange</p>
        </div>
    )
}

        
export const Nav = () => {
    return (
        <nav className="nav">
          <NavLink to="/Auto-BDTs">Auto BDT</NavLink>
        </nav>
    )
}

export const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <Nav />
            </div>
        </header>
    )
}