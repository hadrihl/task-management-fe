import { useEffect, useState } from "react";
import { getAllUsers, createUser, updateUser } from "../../services/UserService";

const UserForm = ({onUserCreated}) => {

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
                if(onUserCreated) {
                    onUserCreated();
                }

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
        <div>
            <h2>UserForm</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" value={user.username} onChange={(e) => { setUser({...user, username: e.target.value}) }} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
    
}

export default UserForm;