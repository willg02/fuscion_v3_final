import React, { useEffect } from 'react';
import Header from './components/Header';
import Gateway from './components/Gateway';
import About from './components/About';
import Clinic from './components/Clinic';
import WhatIDo from './components/WhatIDo';
import Philosophy from './components/Philosophy';
import Writings from './components/Writings';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Gateway />
        <About />
        <Clinic />
        <WhatIDo />
        <Philosophy />
        <Writings />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
