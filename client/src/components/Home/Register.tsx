const Register = () => {
  return (
    <form>
      <h1>Register</h1>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="Email" />
      </div>
      <div>
        <label htmlFor="usename">Username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Register;
