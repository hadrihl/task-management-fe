import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Register from './pages/Register';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import TaskDetails from './components/task/TaskDetails';
import TaskForm from './components/task/TaskForm';
import Users from './pages/Users';
import Progress from './pages/Progress';

import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/tasks/:id" element={<TaskDetails />} />
                <Route path="/tasks/new" element={<TaskForm />} />
                <Route path="/users" element={<Users />} />
                <Route path="/progress" element={<Progress />} />
            </Routes>
        </Router>
    );
};

export default App;