import React, { useEffect, useRef } from 'react';

const WhatIDo = () => {
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
    <section id="what-i-do" className="section-container" ref={sectionRef}>
      <div className="content-block">
        <div className="fade-in">
          <h2 className="section-title pb-4 border-b border-soft-beige w-1/2">
            What I Do
          </h2>
          
          <div className="mt-8 space-y-6">
            <p>
              I don't have a program. I don't offer a system. What I offer is <em>space</em> — the kind 
              that allows you to see yourself more clearly, to feel more fully, and to move with 
              greater intention.
            </p>
            
            <p>
              This might look like:
            </p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>One-on-one guidance</strong> for individuals navigating life transitions, chronic stress, 
                or the quiet ache of misalignment.
              </li>
              <li>
                <strong>Small group experiences</strong> designed to cultivate presence, coherence, and embodied wisdom.
              </li>
              <li>
                <strong>Workshops and talks</strong> that bridge science, spirituality, and the practical art of living well.
              </li>
            </ul>
            
            <p>
              The work is relational, reflective, and deeply personal. It's not about fixing you. 
              It's about remembering who you are when you stop trying to be someone else.
            </p>
            
            <p>
              If you're curious, let's talk.
            </p>
          </div>
          
          <div className="mt-10">
            <a href="#connect" className="button-primary inline-block">
              Start the Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
