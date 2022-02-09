import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../../store/actions/userActions';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState<String>('');
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

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const token = result.token;

          localStorage.setItem('jsonwebtoken', token);

          dispatch(userActions.loginUser());
          navigate('/main');
        } else {
          setMessage(result.message);
        }
      });

    // const token = localStorage.getItem('jsonwebtoken');
    // console.log(token);
    // fetch(`http://localhost:3000/accounts/${userInfo.username}`, {
    //   method: 'GET',
    //   headers: { Authorization: `Bearer ${token}` },
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result.success) {
    //       console.log(result);
    //     }
    //   });
  };

  return (
    <form onSubmit={submitHandler}>
      <span>{message}</span>
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
