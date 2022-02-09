import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Logout from './components/Home/Logout';
import RequireAuth from './components/Auth/RequireAuth';
import RequireLogout from './components/Auth/RequireLogout';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <RequireLogout>
              <Home />
            </RequireLogout>
          }
        />
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
