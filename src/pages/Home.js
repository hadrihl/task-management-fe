import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Home = () => {
    return (
        <div className='App'>     
            <Navbar />

            <header className='App-header'>
                <div class='hero'>
                    <h2>Stay Organized with To-Do List App!📒</h2>
                    <p>Keep track of your tasks effortlessly with our simple, user-friendly to-do list app. Create, edit, and manage tasks in one place. With easy user management and a clean interface, getting things done has never been easier. Stay productive and organized, all in one app!</p>
                    <a href="/register"><button>Register</button></a>
                </div>

                
            </header>

            <Footer />
        </div>
    );
};

export default Home;
