import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2'
const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('tasks.store'), {
            title,
            description,
            date,
            status
        }, {
            onSuccess: () => {
                console.log('Task created successfully!');
                Swal.fire(
                    'Success!',
                    'Your task has been created.',
                    'success'
                );
            },
            onError: (errors) => {
                console.error(errors);
                Swal.fire(
                    'Error!',
                    'There was an issue creating your task.',
                    'error'
                );
            }
        });
        
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div style={{ width: '100%', maxWidth: '600px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Create New Task</h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Title</label>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                border: '1px solid #ddd' 
                            }} 
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Description</label>
                        <textarea 
                            value={description} 
                            onChange={e => setDescription(e.target.value)} 
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                border: '1px solid #ddd', 
                                minHeight: '100px' 
                            }} 
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Date</label>
                        <input 
                            type="date" 
                            value={date} 
                            onChange={e => setDate(e.target.value)} 
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                border: '1px solid #ddd' 
                            }} 
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Status</label>
                        <input 
                            type="text" 
                            value={status} 
                            onChange={e => setStatus(e.target.value)} 
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                border: '1px solid #ddd' 
                            }} 
                        />
                    </div>
                    <button 
                        type="submit" 
                        style={{ 
                            padding: '10px', 
                            backgroundColor: '#4CAF50', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '5px', 
                            cursor: 'pointer', 
                            alignSelf: 'center', 
                            width: '50%' 
                        }} 
                    >
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;
