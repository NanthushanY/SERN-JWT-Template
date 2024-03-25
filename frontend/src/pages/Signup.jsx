import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signup', formData);
            console.log('Signup successful. Token:', response.data.token);
            // Redirect or perform actions upon successful signup
        } catch (error) {
            console.error('Error occurred during signup:', error);
            // Handle signup error
        }
    };

    return (
        <div className="d-flex flex-column">
            <h3 className="m-2">Signup</h3>
            <input type="text" className="w-25 rounded-lg m-2" maxLength={100} placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
            <input type="email" className="w-25 rounded-lg m-2" maxLength={100} placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            <input type="password" className="w-25 rounded-lg m-2" maxLength={50} placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            <button type="button" className="btn btn-primary m-2 w-25" onClick={handleSubmit}>Signup</button>
            <div className="d-flex w-25 justify-content-center">
                <p className="m-2">or</p>
            </div>
            <NavLink to="/login">
                <button type="button" className="btn btn-success w-25 m-2">Login</button>
            </NavLink>
        </div>
    );
};

export default Signup;
