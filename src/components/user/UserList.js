import { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../services/UserService";
import UserForm from "./UserForm";
import { Link } from "react-router-dom";

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
            
            
            <h4>User Management <Link to={`/users/new`}>➕</Link></h4>
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
                        <td><Link to={`/users/${user.id}`}>{user.username}</Link></td>
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