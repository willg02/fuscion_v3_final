import React, { useEffect, useRef } from 'react';

const Gateway = () => {
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
    <section id="home" className="section-container pt-[200px]" ref={sectionRef}>
      <div className="content-block text-left">
        {/* Section Intro */}
        <p className="uppercase text-[12px] tracking-[0.15em] font-medium mb-12" style={{ color: '#6A6A6A' }}>
          For the ones who already know better
        </p>

        {/* Pre-Gateway */}
        <div className="fade-in mb-10">
          <p className="mb-8 text-[19px] leading-[1.8]">
            You've done the work. You've read the books, attended the workshops, tried the apps.
          </p>
          <p className="mb-8 text-[19px] leading-[1.8]">
            You already know what you're supposed to do.
          </p>
          <p className="mb-8 text-[19px] leading-[1.8]">
            But knowing isn't the same as living it.
          </p>
        </div>

        {/* Core Gateway */}
        <div className="fade-in mb-10">
          <p className="mb-8 text-[19px] leading-[1.8]">
            The real question isn't <em>what</em> to do. It's <em>why</em> you're not doing it — and <em>how</em> to shift from knowing into being.
          </p>
          <p className="mb-8 text-[19px] leading-[1.8]">
            That shift doesn't happen through force. It happens through alignment. Through spaciousness. Through a kind of attention most of us never learned.
          </p>
        </div>

        {/* Post-Gateway */}
        <div className="fade-in mb-10 pl-6 border-l-2 border-[#E4E0D8]">
          <p className="mb-8 text-[19px] leading-[1.8]">
            This is not a program. It's not a quick fix. It's not going to tell you what you already know.
          </p>
          <p className="mb-8 text-[19px] leading-[1.8]">
            It's something quieter. Deeper. More honest.
          </p>
        </div>

        {/* Invitation */}
        <div className="fade-in mt-16 text-center">
          <p className="mb-6 text-[20px] leading-[1.8]">
            If that resonates, you're in the right place.
          </p>
          <p className="text-[24px] font-semibold tracking-wide" style={{ color: '#1A1A1A' }}>
            Welcome to <span className="font-semibold">FUSCION</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gateway;
