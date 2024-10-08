import { useEffect, useState } from "react";
import { getAllUsers, createUser, updateUser } from "../../services/UserService";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Link, useNavigate } from "react-router-dom";

const UserForm = ({onUserCreated}) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createUser(user);

            if(response.status === 201) {
                navigate('/users');

                setUser({
                    username: '',
                    email: '',
                    password: ''
                });
            }
        } catch (error) {
            console.error("error creating user: ", error);
        }
    };

    return (
        <div className="App">
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />
            <Navbar />

            <div className="App-header">
                <h2>Create New User <i class='far fa-id-card'></i></h2>
                
                <form onSubmit={handleSubmit} className="form-user">
                    <div className="form-group">
                        <input type="text" name="username" id="username" placeholder="Enter username" value={user.username} onChange={(e) => { setUser({...user, username: e.target.value}) }} required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="email" id="email" placeholder="Enter email" value={user.email} onChange={(e) => { setUser({...user, email: e.target.value}) }} required />
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" id="password" placeholder="Enter password" value={user.password} onChange={(e) => { setUser({...user, password: e.target.value}) }} required />
                    </div>
                    <div className="form-group">
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
    
}

export default UserForm;