import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Logout from './components/Landing/Logout';
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
              <Landing />
            </RequireLogout>
          }
        />
        <Route
          path="/main"
          element={
            <RequireAuth>
              <Home />
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
