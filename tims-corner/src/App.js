import React from 'react';
import './Styles/App.css';
import NaviBar from './Components/NaviBar';
import HomePage from './Sections/HomePage';

function App() {
  return (
    <div className="App">
      <NaviBar />
      <HomePage />
      <header className="App-header" id="aboutMe">About Me</header>
      <header className="App-header" id="resume">Education & Experience</header>
      <header className="App-header" id="projects">Projects</header>
      <header className="App-header" id="skills">Skills</header>
      <header className="App-header" id="contacts">Contacts</header>
    </div>
  );
}
export default App;
