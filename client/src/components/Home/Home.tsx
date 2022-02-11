import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <header>
        <ul>
          <li>
            <button>
              <NavLink to="/logout">Logout</NavLink>
            </button>
          </li>
        </ul>
      </header>
      <section>
        <h1>This is the Main Page!</h1>
        <form>
          <label htmlFor=""></label>
          <input type="text" />
        </form>
      </section>
    </main>
  );
};

export default Home;
