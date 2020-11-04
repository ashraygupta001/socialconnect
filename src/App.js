import React from 'react';
import './App.module.css';
import Dashboard from './components/Dashboard';
import { Router } from "@reach/router"
import MotivationPage from './components/MotivationPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard path='/' />
        <MotivationPage path='page' />
      </Router>
    </div>
  );
}

export default App;
