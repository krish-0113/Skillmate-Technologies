/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // useNavigate inside the component

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/login', user)
      .then((res) => {
        alert(res.data.message);
        if (res.data.message === 'Login Successfully') {
          setLoginUser(res.data.user);
          navigate('/home'); // Navigate to home page after login
        }
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('Error: ' + err.message);
      });
  };

  return (
    <div className="signUp-Container">
      <form className="addUserForm" onSubmit={login}>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
        <div className="login">
          <p>Dont have an account?</p>
          <Link to="/register" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
