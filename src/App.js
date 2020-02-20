import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <NavBar />
        <Welcome />
      </div>
    </div>
  );
}

export default App;
