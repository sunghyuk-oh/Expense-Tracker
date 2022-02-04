import React, { useState } from 'react';

const Login = () => {
  const [userInfo, setUserInfo] = useState<{
    username: string;
    password: string;
  }>({
    username: '',
    password: '',
  });

  const usernameHandler = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value,
    });
  };

  const passwordHandler = () => {};

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    setUserInfo({
      ...userInfo,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Login</h1>
      <div>
        <label htmlFor="usename">Username</label>
        <input type="text" id="username" onChange={usernameHandler} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={passwordHandler} />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
