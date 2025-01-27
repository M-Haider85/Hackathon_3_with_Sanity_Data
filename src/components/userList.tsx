'use client';

import { useEffect, useState } from 'react';

type User = {
    id: string;
    name: string;
    email: string;
    gender: string;
    product: string;
};

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('/api/mockdata');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (loading) return <p>Loading users...</p>;

    return (
        <div className='ml-28 mr-28 mt-10'>
            <h2 className='text-lg text-center text-amber-800'>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email} - {user.gender} - {user.product}</li>
                ))}
            </ul>
        </div>
    );
}
