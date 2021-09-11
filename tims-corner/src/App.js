import React from 'react';
import './Styles/App.css';
import HomePage from './Sections/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <header className="App-header">
          Learn React
      </header>
      <div className="resumeSec">
        Education & Experience 
      </div>
    </div>
  );
}
export default App;
