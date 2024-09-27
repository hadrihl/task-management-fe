import { useState } from "react";
import { createTask, getAllTasks } from "../../services/taskService";

const TaskForm = ({ onTaskCreated }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: "LOW",
        completed: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createTask(task);
            
            if(response.status === 201) {
                if(onTaskCreated) {
                    onTaskCreated(); // trigger function call to refresh the latest list of tasks

                    // Reset form
                    setTask({
                        title: '',
                        description: '',
                        priority: "LOW", 
                        completed: false
                    });
                }
            }
        } catch (error) {
            console.error("Error creating task: " + error);
        }
    };

    return (
        <div className="task-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="task" id="task" value={task.title} onChange={(e) => { setTask({...task, title: e.target.value}) }} />
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )

}

export default TaskForm;