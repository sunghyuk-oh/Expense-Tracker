import React, { useState } from 'react';

const Login = () => {
  const [userInfo, setUserInfo] = useState<{
    username: string;
    password: string;
  }>({
    username: '',
    password: '',
  });

  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Login</h1>
      <div>
        <label htmlFor="usename">Username</label>
        <input type="text" id="username" onChange={loginHandler} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={loginHandler} />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
