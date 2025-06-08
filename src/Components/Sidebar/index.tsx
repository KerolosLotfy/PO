import { Outlet } from 'react-router-dom'
import './styles.css'
// import { Link } from 'react-router-dom'

export const Test = () => {
    return (
        <div className="test">
            {/* <h1>Test Component</h1> */}
            {/* <Link to="/">Home</Link> */}
        </div>
    )
}

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <Test/>
            </div>
        </aside>
    )
}