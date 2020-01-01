import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      
      <div className='About'>
        <About></About>
      </div>
      <h1 className='projects-heading'><Fade bottom cascade>Projects.</Fade></h1>
      <div className='work'>
        <Work></Work>
      </div>
      <h1 className='contact-heading'><Fade bottom cascade>Get in touch!</Fade></h1>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
