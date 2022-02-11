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
      </section>
    </main>
  );
};

export default Home;
