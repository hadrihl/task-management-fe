import GoogleSigninButton from "../components/common/GoogleOAuthButton";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Login = () => {

    return (
        <div class="App">
            <Navbar />
            
            <header className="App-header">
                <div className='login'>
                    <h2>Login</h2>
                    <form  class="form-login">
                        <div class="form-group">
                            <input type="text" name="username" id="username" placeholder="Enter Username" required />
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" id="password" placeholder="Enter Password" required />
                        </div>
                        <div class="form-group">
                            <p><span><a href="#">Forgot password?</a> Or Register <a href="#">here</a>.</span></p>
                        </div>
                        <div class="form-group">
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                </div>

                <GoogleSigninButton />
            </header>

            <Footer />
        </div>
    ) 
}

export default Login;