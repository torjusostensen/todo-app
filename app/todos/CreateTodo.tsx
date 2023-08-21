'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateTodo() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const router = useRouter();
    
    const create = async() => {
        
        await fetch('http://127.0.0.1:8090/api/collections/todos/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                description,
            }),
        });

        setName('');
        setDescription('');

        router.refresh();
    }

    return (
        <form onSubmit={create}>
            <h3>Create a new Todo</h3>
            <input
                type="text"
                placeholder="Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">
                Create Todo
            </button>
        </form>
    );
}