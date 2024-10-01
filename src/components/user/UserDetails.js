import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../services/UserService";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { updateTask } from "../../services/taskService";

const UserDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        username: '',
        email: ''
    });

    useEffect(() => {
        fetchUser(id);
    }, []);

    const fetchUser = async (id) => {
        try {
            const response = await getUser(id);
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user: ", error);
        }
    }

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();

        try {
            await updateTask(user.id, user);
            navigate('/users');
        } catch (error) {
            console.error("Error updating user: ", error);
        }
    }

    return (
        <div className="App">
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />
            <Navbar />

            <div className="App-header">
                <h2>Edit User Information <i class='far fa-id-card'></i></h2>
                <form className="user-details">
                <div className="form-group">
                        <label>Username: </label>
                        <input type="text" name="username" id="username" placeholder="Enter username" value={user.username} onChange={(e) => { setUser({...user, username: e.target.value}) }} required />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" name="email" id="email" placeholder="Enter email" value={user.email} onChange={(e) => { setUser({...user, email: e.target.value}) }} required />
                    </div>
                    <div class="form-group">
                        <label>Password: </label>
                        <input type="password" name="password" id="password" placeholder="Enter password" value={user.password} onChange={(e) => { setUser({...user, password: e.target.value}) }} required />
                    </div>
                    <div className="form-group">
                        <button onClick={() => { navigate('/users') }}>Cancel</button>
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )

}

export default UserDetails;