import { useEffect, useState } from "react";
import { getAllUsers, createUser, updateUser } from "../../services/UserService";

const UserForm = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await getAllUsers();
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users: " + error);
        }
    };

    return (
        <div>
            <h2>UserForm</h2>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    
}

export default UserForm;