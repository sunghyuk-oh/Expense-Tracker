import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as userActions from '../../store/actions/userActions';

const Register = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState<String>('');
  const [newUserInfo, setNewUserInfo] = useState<{
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    confirmPassword: string;
  }>({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const registerHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserInfo({
      ...newUserInfo,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUserInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log('Registration Success!');
          dispatch(userActions.registerUser());
          setMessage(result.message);
        } else {
          setMessage(result.message);
        }
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <span>{message}</span>
      <h1>Register</h1>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" onChange={registerHandler} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" onChange={registerHandler} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={registerHandler} />
      </div>
      <div>
        <label htmlFor="usename">Username</label>
        <input type="text" id="username" onChange={registerHandler} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={registerHandler} />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          onChange={registerHandler}
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default Register;
