import React, { useState } from 'react';

const Register = () => {
  const [newUserInfo, setNewUserInfo] = useState<{
    firstName: string;
    lastName: string;
    username: string;
    password: string;
  }>({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const registerHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserInfo({
      ...newUserInfo,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
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
        <input type="text" id="Email" onChange={registerHandler} />
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
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default Register;
