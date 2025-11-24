import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-12 px-6 border-b border-[#E4E0D8] bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Tagline */}
        <div className="text-center mb-12">
          <h1 className="text-[48px] font-semibold mb-3 tracking-[-0.02em]" style={{ color: '#1A1A1A' }}>
            FUSCION<sup className="text-[14px] font-light ml-0.5">TM</sup>
          </h1>
          <p className="text-[22px] font-light tracking-wide" style={{ color: '#4F4F4F' }}>
            Flow gently into a healthy, meaningful life.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-10 text-[15px] font-medium">
          <button 
            onClick={() => scrollToSection('home')} 
            className="hover:underline transition-all duration-200 tracking-wide"
            style={{ color: '#1A1A1A' }}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:underline transition-all duration-200 tracking-wide"
            style={{ color: '#1A1A1A' }}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('what-i-do')} 
            className="hover:underline transition-all duration-200 tracking-wide"
            style={{ color: '#1A1A1A' }}
          >
            What I Do
          </button>
          <button 
            onClick={() => scrollToSection('philosophy')} 
            className="hover:underline transition-all duration-200 tracking-wide"
            style={{ color: '#1A1A1A' }}
          >
            Philosophy
          </button>
          <button 
            onClick={() => scrollToSection('connect')} 
            className="hover:underline transition-all duration-200 tracking-wide"
            style={{ color: '#1A1A1A' }}
          >
            Connect
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
