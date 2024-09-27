import { useEffect, useState } from "react";
import { getTask, updateTask } from "../../services/taskService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const TaskDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Extract the 'id' from the URL
    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: "LOW",
        completed: false
    });

    useEffect(() => {
        fetchTask(id);
    }, []);

    const fetchTask = async (id) => {
        try {
            const response = await getTask(id);
            setTask(response.data);
        } catch (error) {
            console.error("error fetching task: ", error);
        }
    };

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();

        try {
            await updateTask(task.id, task);
            navigate('/tasks');
        } catch (error) {
            console.error("Error updating task: " + error);
        }
    }

    const navigateCancel = useNavigate();

    return (
        <div className="App">
            <Navbar />

            <div className="App-header">
                <div className="task-details">
                    <h2>Edit Task: {task.id} </h2>
                    <form onSubmit={handleSubmitUpdate}>
                        <div class="form-group">
                            <label>Title: </label>
                            <input type="text" name="title" id="title" defaultValue={task.title} onChange={(e) => { setTask({...task, title: e.target.value}) }} />
                        </div>
                        <div class="form-group">
                            <label>Description: </label>
                            <input type="text" name="description" id="description" defaultValue={task.description} onChange={(e) => { setTask({...task, description: e.target.value}) }} />
                        </div>
                        <div class="form-group">
                            <label>Priority: </label>
                            <select id="priority" name="priority" value={task.priority} onChange={(e) => { setTask({...task, priority: e.target.value}) }}>
                                <option value="LOW">1</option>
                                <option value="MEDIUM">2</option>
                                <option value="HIGH">3</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Completed: </label>
                            <select id="completed" name="completed" value={task.completed} onChange={(e) => { setTask({...task, completed: e.target.value}) }}>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>

                        </div>
                        <div class="form-group">
                            <button onClick={() => { navigateCancel('/tasks') }}>Cancel</button>
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default TaskDetails;