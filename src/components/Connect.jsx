import React, { useEffect, useRef, useState } from 'react';

const Connect = () => {
  const sectionRef = useRef(null);
  const [formData1, setFormData1] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formData2, setFormData2] = useState({
    reflection: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = sectionRef.current.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleScheduleCall = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Schedule a Private Alignment Conversation');
    const body = encodeURIComponent(
      `Name: ${formData1.name}\nEmail: ${formData1.email}\n\nMessage:\n${formData1.message}`
    );
    window.location.href = `mailto:drdalsania@fuscion.com?subject=${subject}&body=${body}`;
  };

  const handleJoinJourney = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Join the Journey');
    const body = encodeURIComponent(
      `My reflection:\n\n${formData2.reflection}`
    );
    window.location.href = `mailto:drdalsania@fuscion.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="connect" className="section-container" ref={sectionRef}>
      <div className="max-w-[680px] mx-auto">
        <div className="fade-in text-center mb-16">
          <h2 className="section-title">Connect</h2>
          <p className="text-warm-grey text-[16px]">
            When timing and alignment converge
          </p>
        </div>
        
        {/* Join the Journey Block */}
        <div className="fade-in text-center mb-32 max-w-[620px] mx-auto py-16">
          <div className="space-y-7 mb-14">
            <p className="text-[22px] font-medium tracking-wide" style={{ color: '#1A1A1A' }}>Join the journey.</p>
            <p className="text-[18px] leading-[1.8]">If you're here now, there is a reason.</p>
            <p className="text-[18px] leading-[1.8]">Take a breath — peacefully, gently.</p>
            <p className="text-[18px] leading-[1.8]">Relax.</p>
            <p className="text-[18px] leading-[1.8]">And ask yourself:</p>
          </div>
          
          <div className="space-y-5 text-[21px] mb-12 py-8 border-t border-b border-[#E4E0D8]">
            <p className="italic" style={{ color: '#4A4A4A' }}><em>Is it you... or the world?</em></p>
            <p className="italic" style={{ color: '#4A4A4A' }}><em>Where does health and healing really start?</em></p>
          </div>
        </div>
        
        {/* Form 1: Schedule a Call */}
        <div className="fade-in mb-20">
          <h3 className="text-[24px] font-semibold mb-8 text-center">
            Schedule a Private Alignment Conversation
          </h3>
          
          <form onSubmit={handleScheduleCall} className="space-y-6 max-w-[540px] mx-auto">
            <div>
              <label htmlFor="name" className="block text-[14px] mb-2 text-warm-grey">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData1.name}
                onChange={(e) => setFormData1({ ...formData1, name: e.target.value })}
                className="w-full px-5 py-4 border-2 border-[#E4E0D8] rounded-sm bg-white focus:bg-[#FAFAF8] focus:border-[#4A4A4A] focus:outline-none transition-all text-[16px]"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-[14px] mb-2 text-warm-grey">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData1.email}
                onChange={(e) => setFormData1({ ...formData1, email: e.target.value })}
                className="w-full px-5 py-4 border-2 border-[#E4E0D8] rounded-sm bg-white focus:bg-[#FAFAF8] focus:border-[#4A4A4A] focus:outline-none transition-all text-[16px]"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-[14px] mb-2 text-warm-grey">
                What brings you here?
              </label>
              <textarea
                id="message"
                rows="5"
                required
                value={formData1.message}
                onChange={(e) => setFormData1({ ...formData1, message: e.target.value })}
                className="w-full px-5 py-4 border-2 border-[#E4E0D8] rounded-sm bg-white focus:bg-[#FAFAF8] focus:border-[#4A4A4A] focus:outline-none transition-all resize-none text-[16px] leading-[1.7]"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button type="submit" className="button-primary">
                Send Message
              </button>
              <p className="text-[14px] text-warm-grey mt-4">
                Or email directly: <a href="mailto:drdalsania@fuscion.com" className="underline">drdalsania@fuscion.com</a>
              </p>
            </div>
          </form>
        </div>
        
        {/* Form 2: Join the Journey */}
        <div className="fade-in">
          <h3 className="text-[24px] font-semibold mb-8 text-center">
            Join the Journey
          </h3>
          
          <form onSubmit={handleJoinJourney} className="space-y-6 max-w-[540px] mx-auto">
            <div>
              <label htmlFor="reflection" className="block text-[14px] mb-2 text-warm-grey">
                Share your reflection on where you are right now
              </label>
              <textarea
                id="reflection"
                rows="6"
                required
                value={formData2.reflection}
                onChange={(e) => setFormData2({ ...formData2, reflection: e.target.value })}
                className="w-full px-5 py-4 border-2 border-[#E4E0D8] rounded-sm bg-white focus:bg-[#FAFAF8] focus:border-[#4A4A4A] focus:outline-none transition-all resize-none text-[16px] leading-[1.7]"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button type="submit" className="button-primary">
                Begin the Journey
              </button>
              <p className="text-[14px] text-warm-grey mt-4">
                This is a gentle first step. No pressure. Just presence.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connect;
