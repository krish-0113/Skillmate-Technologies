/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

const Register = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const signUp = async (event) => {
    event.preventDefault();
    const { name, email, password, cPassword } = user;
    
    if (name && email && password && cPassword && (password === cPassword)) {
      try {
        const res = await axios.post('http://localhost:3000/register', { name, email, password });
        alert(res.data.message);
        
        if (res.data.message === 'Registration Successful') {
          // Navigate to the login page after successful registration
          navigate('/login');
        }
      } catch (err) {
        console.error('Registration Error:', err);
        alert('Registration Error: ' + (err.response?.data?.message || err.message));
      }
    } else {
      alert("Invalid information");
    }
  };

  return (
    <div className='signUp-Container'>
      {/* <h3>Sign Up</h3> */}
      <form className='addUserForm' onSubmit={signUp}>
        <div className='input-container'>
          <label htmlFor="name">Name:</label>
          <input 
            type="text"
            id="name"
            name="name" 
            value={user.name}
            placeholder='Enter your name' 
            onChange={handleChange}
            required
            autoComplete="name"
          />

          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            id="email"
            name="email" 
            value={user.email}
            placeholder='Enter your email' 
            onChange={handleChange}
            required
            autoComplete="email"
          />

          <label htmlFor="password">Password:</label>
          <input 
            type="password"
            id="password"
            name="password" 
            value={user.password}
            placeholder='Enter your password' 
            onChange={handleChange}
            required
            autoComplete="new-password"
          />

          <label htmlFor="cPassword">Confirm Password:</label>
          <input 
            type="password"
            id="cPassword"
            name="cPassword" 
            value={user.cPassword}
            placeholder='Re-Enter Password'  
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
          <button type="submit" className="btn btn-success">Sign Up</button>
        </div>
        <div className="login">
          <p>Already have an account?</p>
          <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
