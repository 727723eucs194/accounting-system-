import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import axios from 'axios';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Login');
  const [name, setName] = useState('');
  const [user, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (action === 'Sign Up') {
      setAction('Login');
    } else {
      if (user && pass.length >= 6) {
        axios
          .get('http://localhost:3000/User')
          .then((res) => {
            const data = res.data;
            const foundUser = data.find((obj) => obj.email === user);

            if (foundUser) {
              if (foundUser.password === pass) {
                navigate('/homepage');
              } else {
                alert('Invalid password');
              }
            } else {
              alert('User not found');
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert('Please enter a valid email and password with at least 6 characters.');
      }
    }
  };

  const handleSignUpClick = () => {
    if (action === 'Login') {
      setAction('Sign Up');
    } else {
      axios
        .get('http://localhost:3000/User')
        .then((res) => {
          const data = res.data;
          const userData = data.find((obj) => obj.email === user);

          if (!userData && pass.length >= 6) {
            axios
              .post('http://localhost:3000/User', {
                name,
                email: user,
                password: pass,
              })
              .then(() => {
                navigate('/');
              })
              .catch((err) => console.log(err));
          } else {
            alert('User already exists or password is too short (minimum 6 characters).');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="logincontainer">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login' ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="text"
            placeholder="Email"
            value={user}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === 'Sign Up' ? null : (
        <div className="forgot-password">
          Lost password?<span>Click here!</span>
        </div>
      )}
      <div className="submit-container">
        <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={handleSignUpClick}>
          Sign Up
        </div>
        <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={handleLoginClick}>
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
