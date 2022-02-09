import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home';
import Main from './components/Main/Main';
import RequireAuth from './components/RequireAuth';
import Logout from './components/Home/Logout';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/main"
          element={
            <RequireAuth>
              <Main />
            </RequireAuth>
          }
        />
        <Route
          path="/logout"
          element={
            <RequireAuth>
              <Logout />
            </RequireAuth>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
