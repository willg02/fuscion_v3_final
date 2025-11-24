import React, { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" className="section-container" ref={sectionRef}>
      <div className="content-block-wide">
        <div className="fade-in">
          <h2 className="section-title pb-6 mb-12 border-b-2 border-[#E4E0D8] inline-block">
            About Dr. Parag Dalsania
          </h2>
          
          <div className="mt-12 space-y-8">
            <p className="text-[19px] leading-[1.8]">
              I'm a physician, educator, and facilitator of presence — trained in the science of the body, 
              devoted to the art of living well.
            </p>
            
            <p className="text-[19px] leading-[1.8]">
              For over a decade, I practiced family medicine, working with patients navigating chronic illness, 
              burnout, and the quiet unraveling that happens when life moves faster than the soul can follow.
            </p>
            
            <p className="text-[19px] leading-[1.8]">
              What I witnessed again and again wasn't a lack of information. It was a lack of <em>integration</em>. 
              A gap between knowing and being. Between intention and action. Between the life people wanted 
              and the one they were actually living.
            </p>
            
            <p className="text-[19px] leading-[1.8] font-medium" style={{ color: '#1A1A1A' }}>
              That gap — that's where I work now.
            </p>
            
            <p className="text-[19px] leading-[1.8]">
              Through <strong>FUSCION</strong>, I support individuals who are ready to move beyond surface-level solutions 
              and into deeper alignment. People who understand that health isn't just physical. That meaning 
              isn't found in achievement. That transformation doesn't come from doing more — it comes from 
              being more present with what already is.
            </p>
            
            <p className="text-[19px] leading-[1.8]">
              This work is grounded in evidence, informed by wisdom traditions, and shaped by the real, 
              messy, beautiful complexity of being human.
            </p>
            
            <p className="text-[19px] leading-[1.8] font-medium" style={{ color: '#1A1A1A' }}>
              If you're here, it's because something in you already knows: there's another way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
