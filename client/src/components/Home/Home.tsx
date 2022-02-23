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
        <h1>This is the Main Page! Log your expense!</h1>
        <form>
          <div>
            <label htmlFor="date"></label>
            <input type="text" id="date" />
          </div>
          <div>
            <label htmlFor="title"></label>
            <input type="text" id="title" />
          </div>
          <div>
            <label htmlFor="price"></label>
            <input type="text" id="price" />
          </div>
          <div>
            <label htmlFor="category"></label>
            <input type="text" id="category" />
          </div>

          <button>Add Expense</button>
        </form>
      </section>
    </main>
  );
};

export default Home;
