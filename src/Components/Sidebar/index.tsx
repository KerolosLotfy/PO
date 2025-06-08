import './styles.css'
// import { Link } from 'react-router-dom'
export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <h2>Sidebar</h2>
                <p>This is the sidebar content.</p>
                {/* <Link to="/sidebar">Go to Sidebar</Link> */}
            </div>
        </aside>
    )
}