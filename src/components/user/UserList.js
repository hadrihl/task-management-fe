import { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../services/UserService";
import UserForm from "./UserForm";

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await getAllUsers();
            setUsers(response.data);
        } catch (error) {
            console.log("error fetching users: ", error);
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            fetchUsers();
        } catch (error) {
            console.log("Error deleting user: ", error);
        }
    }

    return (
        <div className="users-list">
            <UserForm onUserCreated={fetchUsers} />
            
            <h2>Manage Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>#username</th>
                        <th>#email</th>
                        <th>#action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                    <tr key={user.id}>
                        <td >{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td><a href="#" onClick={() => handleDelete(user.id)}>❌</a></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default UserList;