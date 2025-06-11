

export const Auth: React.FC = () => {
    console.log("Auth component loaded");
    return (
        <div className="auth-container">
            <h1>Authentication</h1>
            <p>Please sign in to continue.</p>
            {/* You can add Signin and Signup components here */}
            {/* <Signin /> */}
            {/* <Signup /> */} 
        </div>
    );  
}

// You can also import and use Signin and Signup components here
// import { Signin } from './Signin';           