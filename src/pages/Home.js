import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Home = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Task Management</h1>
                <TaskForm fetchTasks />
                <TaskList />
            </header>
            
        </div>
    );
};

export default Home;
