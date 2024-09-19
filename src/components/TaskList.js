import React, {useState, useEffect} from "react";
import { getAllTasks, deleteTask } from "../services/taskService";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await getAllTasks();
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks: ", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            fetchTasks(); // refresh tasks after deletion
        } catch (error) {
            console.error("Error deleting task: ", error);
        }
    };

    return (
        <div>
            <h1>Task List</h1>
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - {task.description}
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;