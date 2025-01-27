'use client'

import React, { useEffect, useState } from 'react';

type User = {
    id: string;
    name: string;
    email: string;
    gender: string;
    product: string;
};

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://677f89da0476123f76a6eb3c.mockapi.io/ecommweb'); // Actual mock API URL
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
            <h2 className='text-3xl  text-blue-600'>---User List---</h2>
            <ul className='text-lg list-decimal text-lime-600'>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email} - {user.gender} - {user.product}</li>
                ))}
            </ul>
        </div>
    );
}
