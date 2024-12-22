import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from './MenuItem';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get('/menu_items.json'); // Local JSON file for now
                setMenuItems(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menuItems.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default Menu;