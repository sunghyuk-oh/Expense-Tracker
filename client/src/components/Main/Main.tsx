import { NavLink } from 'react-router-dom';
const Main = () => {
  return (
    <header>
      <ul>
        <li>
          <button>
            <NavLink to="/logout">Logout</NavLink>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Main;
