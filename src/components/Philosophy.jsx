import React, { useEffect, useRef } from 'react';

const Philosophy = () => {
  const sectionRef = useRef(null);

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

  return (
    <section id="philosophy" className="section-container" ref={sectionRef}>
      <div className="content-block-wide">
        <div className="fade-in text-center mb-10">
          <h2 className="section-title">
            Row, Row, Row Your Boat — Remember this?
          </h2>
        </div>
        
        <div className="fade-in text-center mb-20">
          <div className="text-[26px] font-light italic leading-[2] max-w-[580px] mx-auto py-12 px-8 rounded-sm" 
               style={{ 
                 color: '#4F4F4F',
                 backgroundColor: 'rgba(228, 224, 216, 0.2)',
                 borderLeft: '3px solid #E4E0D8'
               }}>
            <p className="mb-2">Row, row, row your boat,</p>
            <p className="mb-2">Gently down the stream,</p>
            <p className="mb-2">Merrily, merrily, merrily, merrily,</p>
            <p>Life is but a dream.</p>
          </div>
        </div>
        
        <div className="fade-in content-block text-left space-y-6">
          <p>
            Most of us learned this as children. We sang it. We didn't question it.
          </p>
          
          <p>
            But somewhere along the way, we forgot what it was really teaching us.
          </p>
          
          <p>
            <strong>Row</strong> — you have agency. You move. You act.<br />
            <strong>Gently</strong> — not with force. Not with strain.<br />
            <strong>Down the stream</strong> — with the current, not against it.<br />
            <strong>Merrily</strong> — with ease. With joy. With presence.<br />
            <strong>Life is but a dream</strong> — impermanent. Fluid. Not as solid as it seems.
          </p>
          
          <p>
            This is the philosophy at the heart of <strong>FUSCION</strong>.
          </p>
          
          <p>
            It's not about doing more. It's about moving <em>with</em> life, not against it. 
            It's about finding the current — the flow — and learning to trust it.
          </p>
          
          <p>
            Most of us are rowing upstream. Hard. Exhausted. Wondering why it's so difficult.
          </p>
          
          <p>
            But what if you turned the boat around?
          </p>
          
          <p>
            What if the life you're seeking isn't somewhere ahead, earned through effort and achievement?
          </p>
          
          <p>
            What if it's already here — waiting for you to stop straining and start flowing?
          </p>
          
          <p>
            That's the work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
