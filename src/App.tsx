import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import History from './page/history';
import Staff from './page/staff';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<History />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/staff" element={<Staff />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
