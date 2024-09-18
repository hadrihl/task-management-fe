import React, { useState } from 'react';
import { createTask, updateTask } from '../services/taskService';

const TaskForm = ({ task, fetchTasks, editMode }) => {
    const [formData, setFormData] = useState({
        title: task ? task.title : '',
        description: task ? task.description : '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editMode) {
                await updateTask(task.id, formData);
            } else {
                await createTask(formData);
            }
            fetchTasks(); // Refresh tasks after submission
        } catch (error) {
            console.error("Error submitting task:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                />
            </div>
            <button type="submit">{editMode ? 'Update Task' : 'Create Task'}</button>
        </form>
    );
};

export default TaskForm;
