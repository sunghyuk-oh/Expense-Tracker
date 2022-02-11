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
          <div>
            <label htmlFor="title"></label>
            <input type="text" id="title" />
          </div>
          <div>
            <label htmlFor="price"></label>
            <input type="text" id="price" />
          </div>

          <button>Add Expense</button>
        </form>
      </section>
    </main>
  );
};

export default Home;
