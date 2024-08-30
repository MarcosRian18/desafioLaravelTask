import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';

const EditTask = ({ task }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description || '');
    const [date, setDate] = useState(task.date);
    const [status, setStatus] = useState(task.status);

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post(route('tasks.update', task.id), {
            _method: 'PUT',
            title,
            description,
            date,
            status,
        }).then(() => {
            Swal.fire({
                title: 'Saved!',
                text: 'Your task has been updated successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }).catch(() => {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to update the task. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div style={{ width: '80%', maxWidth: '600px' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Edit Task</h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div>
                        <label>Title</label>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
                            style={{ width: '100%', padding: '8px', marginBottom: '10px' }} 
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea 
                            value={description} 
                            onChange={e => setDescription(e.target.value)} 
                            style={{ width: '100%', padding: '8px', marginBottom: '10px' }} 
                        />
                    </div>
                    <div>
                        <label>Date</label>
                        <input 
                            type="date" 
                            value={date} 
                            onChange={e => setDate(e.target.value)} 
                            style={{ width: '100%', padding: '8px', marginBottom: '10px' }} 
                        />
                    </div>
                    <div>
                        <label>Status</label>
                        <input 
                            type="text" 
                            value={status} 
                            onChange={e => setStatus(e.target.value)} 
                            style={{ width: '100%', padding: '8px', marginBottom: '10px' }} 
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
                            cursor: 'pointer' 
                        }}
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditTask;
