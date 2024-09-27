import GoogleOAuthButton from '../components/common/GoogleOAuthButton';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Register = () => {

    return (
        <div class="App">
            <Navbar />
            
            <header className="App-header">
                <h2>Create an account</h2>
                <form>
                    <div class="form-group">
                        <input type="text" name="username" id="username" placeholder="Enter Username" required />
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" id="email" placeholder="Enter Email" required />
                    </div>
                    <div class="form-group">
                        <input type="passowrd" name="password" id="password" placeholder="Enter Password" required />
                    </div>
                    <div class="form-group">
                        <p><span>Already have an account? click <a href="#">here</a>.</span></p>
                    </div>
                    <div class="form-group">
                        <button>Register</button>
                    </div>
                </form>

                <GoogleOAuthButton />
            </header>

            <Footer />
        </div>
    )
}

export default Register;