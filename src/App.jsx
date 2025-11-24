import React, { useEffect } from 'react';
import Header from './components/Header';
import Gateway from './components/Gateway';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Philosophy from './components/Philosophy';
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
        <WhatIDo />
        <Philosophy />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
