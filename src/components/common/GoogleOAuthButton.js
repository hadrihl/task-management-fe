import { GoogleLogin } from "@react-oauth/google";

const GoogleOAuthButton = () => {

    const handleLoginSuccess = (credentialResponse) => {
        console.log("credential: " + credentialResponse);
    }

    const handleLoginFailure = () => {
        console.log("Login failed.");
    }

    return (
        <div className="GoogleOauthBtn">
            <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
        </div>
    )

}

export default GoogleOAuthButton; 