import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import './App.css';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={RequireAuth(<Main />)} />
      </Routes>
    </Fragment>
  );
}

export default App;
