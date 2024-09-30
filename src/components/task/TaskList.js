import React, {useState, useEffect} from "react";
import { getAllTasks, deleteTask } from "../../services/taskService";
import { Link } from "react-router-dom";
import TaskForm from "./TaskForm";

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
        <div className="tasks">
            <h2>To-Do List App</h2>
            <TaskForm onTaskCreated={fetchTasks} />

            <div className="tasks-ul">
                <table>
                    <tbody>
                    {tasks.length > 0 ? (
                    tasks.map((task) => (
                    <tr>
                        <td key={task.id} className="tasks-items">
                            <Link to={`/tasks/${task.id}`}>🏷️{task.title} <span style={{ color: 'GrayText', fontSize: '1rem' }}>: {task.description}</span></Link>
                        </td>
                        
                        <td className="tasks-action">
            
                        </td>
                    </tr>
                    ))
                    ) : (
                        <tr><td><p>No tasks available.</p></td></tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TaskList;