import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Contact = () => {

    return (
        <div class="App">
            <Navbar />
            <header className="App-header">
                
                <h2>Contact</h2>
                <div className='contact'>
                    <button>support@todolistapp.com.my</button>
                </div>

            </header>

            <Footer />
        </div>
    )
}

export default Contact;