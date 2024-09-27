import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const About = () => {

    return (
        <div class="App">    
            <Navbar />
            <header className="App-header">

                <div className='about'>
                    <div className='about-shoutout'>
                        <h2>About</h2>
                        <p>The To-Do List App is a simple yet effective task management tool designed to help users stay organized and productive. With an intuitive interface, users can easily add, update, and delete tasks, categorize them, set due dates, and track progress. Whether managing personal or work tasks, the app ensures efficient workload management.</p>
                    </div>
                    <div className='about-features'>
                        <h3>Notable Features</h3>
                        <ul>
                            <li>User-friendly design, accessible for both beginners and experienced users.</li>
                            <li>Integrated user authentication, including Google OAuth sign-in for secure access.</li>
                            <li>Tasks securely stored and accessible from any device.</li>
                            <li>Clean, minimalistic layout to reduce distractions.</li>
                            <li>Built using modern technologies like ReactJS (frontend) and Spring Boot (backend).</li>
                            <li>Efficient and reliable tool for managing daily activities.</li>
                        </ul>
                    </div>
                </div>

            </header>

            <Footer />
        </div>
    )
}

export default About;