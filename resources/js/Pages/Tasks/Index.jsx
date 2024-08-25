import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const TaskList = ({ tasks }) => {
    const handleDelete = (id) => {
        if (confirm('Are you sure?')) {
            Inertia.delete(route('tasks.destroy', id));
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div style={{ width: '80%', maxWidth: '1200px' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Tasks</h1>
                <button 
                    style={{ 
                        display: 'block', 
                        margin: '0 auto 20px auto', 
                        padding: '10px 20px', 
                        backgroundColor: '#4CAF50', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer' 
                    }} 
                    onClick={() => Inertia.get(route('tasks.create'))}
                >
                    New Task
                </button>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                    <thead>
                        <tr>
                            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>Title</th>
                            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>Description</th>
                            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>Date</th>
                            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>Status</th>
                            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id}>
                                <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>{task.title}</td>
                                <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>{task.description}</td>
                                <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>{task.date}</td>
                                <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>{task.status}</td>
                                <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
                                    <button 
                                        style={{ 
                                            marginRight: '10px', 
                                            padding: '5px 10px', 
                                            backgroundColor: '#2196F3', 
                                            color: 'white', 
                                            border: 'none', 
                                            borderRadius: '5px', 
                                            cursor: 'pointer' 
                                        }} 
                                        onClick={() => Inertia.get(route('tasks.edit', task.id))}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        style={{ 
                                            padding: '5px 10px', 
                                            backgroundColor: '#f44336', 
                                            color: 'white', 
                                            border: 'none', 
                                            borderRadius: '5px', 
                                            cursor: 'pointer' 
                                        }} 
                                        onClick={() => handleDelete(task.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskList;
