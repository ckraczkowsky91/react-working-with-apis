import React from 'react';
import logo from '../logo.svg';
import './App.css';
import News from './News/News';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Newsfeed</h1>
        <News />
      </header>
    </div>
  );
}

export default App;
