import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Progress = () => {

    return (
        <div className="App">
            <Navbar />

            <div className="App-header">
                <h2>Features Tracking</h2>
                <div class="progress-tracking">
                    <p><a href="#">1. Create static pages (Home, About, Contact, Terms), navigation bar and footer.</a> ✅</p>
                    <p><a href="#">2. Create simple CRUD: Tasks.</a> ✅</p>
                    <p><a href="#">3. Create simple CRUD: Users</a> 💫</p>
                    <p><a href="#">4. Develop simple oauth social login.</a> 💫</p>
                    <p><a href="#">5. Develop a working registration and oauth registration.</a> ⭕</p>
                    <p><a href="#">6. Develop a working login and oauth login.</a> ⭕</p>
                    <p><a href="#">7. Ensure responsive React FE.</a> ⭕</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Progress;