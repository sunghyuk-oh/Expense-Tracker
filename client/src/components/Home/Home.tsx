import { useState } from 'react';
import { useSelector } from 'react-redux';

import Login from './Login';
import Register from './Register';

import classes from './Home.module.css';

const Home = () => {
  const isRegistered = useSelector((state) => state.user.isRegistered);

  const [isLoggingIn, setIsLoggingIn] = useState<Boolean>(true);
  const [isRegistering, setIsRegistering] = useState<Boolean>(false);

  const loginButtonHandler = () => {
    if (!isLoggingIn) {
      setIsLoggingIn(true);
      setIsRegistering(false);
    }
  };

  const RegisterButtonHandler = () => {
    if (!isRegistering) {
      setIsRegistering(true);
      setIsLoggingIn(false);
    }
  };

  return (
    <main className={classes.main}>
      <section className={classes.loginRegister}>
        <div>
          <button onClick={loginButtonHandler}>Login</button>
          <button onClick={RegisterButtonHandler}>Register</button>
        </div>
        {isLoggingIn && <Login />}
        {isRegistering && <Register />}
      </section>
      <section>
        <div>
          <img src="#" alt="Possible-Logo" />
        </div>
        <div className={classes.content}>
          <h2>
            It's not just Expense Tracker <br /> It's <span>EXTRacker</span>
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Home;
