// src/App.js
import React from 'react';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from './components/Project';
 
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
