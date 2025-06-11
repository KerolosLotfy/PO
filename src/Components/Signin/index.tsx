import { Link } from 'react-router-dom';
import './styles.css';
import { Auth } from '../Auth';


export const Signin: React.FC = () => {

    const handleLogin = () => {
        <Auth/> 
    };

    return (
        <div className="signin-container">
            <h1>Sign In</h1>
            <form className="signin-form">
                <label htmlFor="userAccount">User Account:</label>
                <input type="userAccount" id="userAccount" name="userAccount" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button onClick={handleLogin }> Sign In</button>

            {/* <button type="submit" >Sign In</button> */}
        </form>
        </div >

    );
}