

export const Auth: React.FC = () => {
    return (
        <div className="auth-container">
            <h1>Authentication</h1>
            <p>Please sign in to continue.</p>
            <form className="auth-form">
                <label htmlFor="userAccount">User Account:</label>
                <input type="text" id="userAccount" name="userAccount" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}