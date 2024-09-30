import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './utils/firebase';
import './Signup.css';  

const Signup = () => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { firstName, lastName, email, password, confirmPassword } = contact;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const displayName = `${firstName} ${lastName}`; // Create full name for display
            await createUserDocFromAuth(user, { displayName });
        } catch (error) {
            console.log('Error creating user:', error.message);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={contact.firstName}
                        onChange={handleChange}
                    />

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={contact.lastName}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={contact.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={contact.password}
                        onChange={handleChange}
                    />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={contact.confirmPassword}
                        onChange={handleChange}
                    />

                    <button type="submit" className="signup-btn">Sign up</button>
                </form>

                <Link className="login-link" to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Signup;
