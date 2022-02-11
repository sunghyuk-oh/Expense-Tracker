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
          <li>Main Page!</li>
        </ul>
      </header>
      <section></section>
    </main>
  );
};

export default Home;
