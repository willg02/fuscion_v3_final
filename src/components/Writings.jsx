import React, { useEffect, useRef } from 'react';

const Writings = () => {
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

  const articles = [
    {
      title: "Movement is Life!",
      source: "Seniors Engage",
      url: "https://www.seniorsengage.com/news_development/movement-is-life/",
      description: "Exploring the vital connection between physical movement and living a full, vibrant life."
    },
    {
      title: "Movement is Our Nature",
      source: "All About Seniors",
      url: "https://www.allaboutseniors.org/movement-is-our-nature",
      description: "Understanding how movement is fundamental to our human experience and well-being."
    }
  ];

  return (
    <section id="writings" className="section-container" ref={sectionRef}>
      <div className="content-block-wide">
        <div className="fade-in">
          <h2 className="section-title pb-6 mb-12 border-b-2 border-[#E4E0D8] inline-block">
            Writings
          </h2>
          
          <div className="mt-12 space-y-8">
            <p className="text-[19px] leading-[1.8]">
              Reflections on movement, presence, and the art of living well.
            </p>
            
            <div className="grid gap-6 mt-10">
              {articles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 rounded-sm transition-all duration-300 hover:no-underline"
                  style={{ 
                    backgroundColor: 'rgba(228, 224, 216, 0.25)',
                    borderLeft: '3px solid #E4E0D8'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(228, 224, 216, 0.45)';
                    e.currentTarget.style.borderLeftColor = '#4A4A4A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(228, 224, 216, 0.25)';
                    e.currentTarget.style.borderLeftColor = '#E4E0D8';
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-[22px] font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#4A4A4A] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[15px] text-[#6A6A6A] mb-3 uppercase tracking-wider">
                        {article.source}
                      </p>
                      <p className="text-[17px] text-[#4F4F4F] leading-relaxed mb-0">
                        {article.description}
                      </p>
                    </div>
                    <span className="text-[#4A4A4A] ml-4 mt-1 transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writings;
