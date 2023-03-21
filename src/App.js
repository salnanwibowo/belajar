import React from 'react';
import './App.css';

import Belajar from "./components/Belajar";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Belajar />
        <Registration />
      </header>
    </div>
  );
}

export default App;
