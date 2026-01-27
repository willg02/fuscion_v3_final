import React, { useEffect, useRef } from 'react';

const Clinic = () => {
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
    <section id="clinic" className="section-container" ref={sectionRef}>
      <div className="content-block-wide">
        <div className="fade-in">
          {/* Intro Banner */}
          <div className="text-center mb-16">
            <p className="text-[15px] uppercase tracking-[0.1em] text-muted mb-4">
              Health &amp; Healing Intelligence Institute
            </p>
            <p className="text-[17px] text-warm-grey mb-8">
              is pleased to welcome its first 101 clients into our first clinical program:
            </p>
            <h2 className="section-title text-center mx-auto pb-6 mb-0 border-b-2 border-[#E4E0D8] inline-block">
              The Cardiometabolic Risk Reduction Clinic
            </h2>
          </div>

          {/* Is This For You? */}
          <div className="mt-16 space-y-10">
            <div className="space-y-6">
              <h3 className="text-[22px] font-semibold text-charcoal">
                <span className="text-muted uppercase tracking-[0.08em] text-[14px] block mb-2">If</span>
                You're Age 30–60 (or any age) and determined to change your health trajectory
              </h3>
              
              <h3 className="text-[22px] font-semibold text-charcoal">
                <span className="text-muted uppercase tracking-[0.08em] text-[14px] block mb-2">And If</span>
                You're Concerned about the consequences of:
              </h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pl-0 list-none">
                {[
                  "Excess weight or obesity",
                  "Rising or elevated blood pressure",
                  "Prediabetes or type 2 diabetes",
                  "High cholesterol or triglycerides",
                  "Fatty liver risk",
                  "Family history of heart disease, stroke, diabetes, or dementia",
                  "Physical inactivity and low fitness",
                  "Unhealthy alcohol use",
                  "Tobacco or nicotine use",
                  "Poor sleep",
                  "Chronic stress"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[17px] text-warm-grey">
                    <span className="text-graphite mt-1.5 text-[10px]">●</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <p className="text-[17px] text-warm-grey italic">
                Or you simply feel like your health is drifting in the wrong direction.
              </p>
            </div>

            <div className="bg-[#F5F4F2] rounded-sm p-8 border-l-4 border-graphite">
              <h3 className="text-[22px] font-semibold text-charcoal mb-4">
                <span className="text-muted uppercase tracking-[0.08em] text-[14px] block mb-2">Then</span>
                This is for you — We're focused on preventable chronic disease
              </h3>
              <p className="text-[18px] leading-[1.75] text-warm-grey mb-0">
                We help you reduce cardiometabolic risk using evidence-based medicine and high-access primary care—so you can lower the likelihood of heart attack, stroke, and type 2 diabetes, and support long-term brain health (dementia risk).
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mt-20">
            <h3 className="text-[28px] font-semibold text-charcoal mb-8 pb-4 border-b border-soft-beige">
              What We Offer
            </h3>
            <ul className="space-y-6">
              {[
                {
                  title: "A personalized synthesis of your health data",
                  desc: "Labs, imaging, and comprehensive history—all integrated into one clear picture."
                },
                {
                  title: "Time and space to share your real story",
                  desc: "Successes, challenges, patterns, and constraints—heard and honored."
                },
                {
                  title: "A clear, personalized plan",
                  desc: "Targeting the biggest drivers of risk: nutrition, activity, sleep, stress, alcohol, tobacco, and medications when appropriate."
                },
                {
                  title: "Ongoing follow-up and iteration",
                  desc: "So the plan works in real life, not just on paper."
                }
              ].map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-graphite text-white rounded-full flex items-center justify-center text-[14px] font-medium mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-[18px] font-medium text-charcoal mb-1">{item.title}</p>
                    <p className="text-[16px] text-warm-grey mb-0">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Goal */}
          <div className="mt-20 text-center bg-[#FAFAF8] border border-soft-beige rounded-sm p-10">
            <h3 className="text-[28px] font-semibold text-charcoal mb-6">
              Our Goal — Your Success
            </h3>
            <p className="text-[19px] leading-[1.8] text-warm-grey mb-4 max-w-[560px] mx-auto">
              <strong className="text-charcoal">Durable progress and a meaningful healthspan</strong>—more years living well, with fewer preventable chronic diseases and less disability.
            </p>
            <p className="text-[17px] text-muted italic mb-0">
              We focus on what is preventable, improvable, and measurable.
            </p>
          </div>

          {/* Conditions We Focus On */}
          <div className="mt-20">
            <h3 className="text-[28px] font-semibold text-charcoal mb-10 pb-4 border-b border-soft-beige">
              Conditions We Focus On
            </h3>
            
            <div className="space-y-12">
              {/* Cardiometabolic */}
              <div>
                <h4 className="text-[20px] font-semibold text-charcoal mb-5 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-graphite rounded-full"></span>
                  Cardiometabolic Risk &amp; Prevention
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 pl-6 list-none">
                  {[
                    "Overweight and obesity",
                    "Prediabetes and insulin resistance",
                    "Early type 2 diabetes (risk reduction and remission-focused care when appropriate)",
                    "High blood pressure (hypertension)",
                    "High cholesterol and triglycerides (dyslipidemia)",
                    "Metabolic syndrome",
                    "Fatty liver risk (MASLD/NAFLD) and elevated liver enzymes related to metabolic risk",
                    "Kidney risk reduction and early kidney disease screening related to metabolic risk"
                  ].map((item, index) => (
                    <li key={index} className="text-[16px] text-warm-grey py-1">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Heart, Stroke, Brain */}
              <div>
                <h4 className="text-[20px] font-semibold text-charcoal mb-5 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-graphite rounded-full"></span>
                  Heart, Stroke &amp; Brain Risk Reduction
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 pl-6 list-none">
                  {[
                    "Cardiovascular risk assessment and prevention planning (ASCVD risk)",
                    "Family history–driven risk management (early heart disease, diabetes, stroke)",
                    "Brain health / vascular cognitive risk reduction (by lowering vascular risk factors)"
                  ].map((item, index) => (
                    <li key={index} className="text-[16px] text-warm-grey py-1">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Lifestyle-Driven */}
              <div>
                <h4 className="text-[20px] font-semibold text-charcoal mb-5 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-graphite rounded-full"></span>
                  Lifestyle-Driven Risk Factors
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 pl-6 list-none">
                  {[
                    "Tobacco/nicotine use (cessation support + medical management)",
                    "Unhealthy alcohol use and alcohol-related cardiometabolic risk",
                    "Physical inactivity and low fitness (structured progression plans)",
                    "Sleep issues that worsen metabolic risk (sleep apnea screening + insomnia/sleep duration support when indicated)",
                    "Stress and burnout that worsen cardiometabolic risk (practical, measurable strategies)"
                  ].map((item, index) => (
                    <li key={index} className="text-[16px] text-warm-grey py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a href="#connect" className="button-primary inline-block">
              Join the First 101
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinic;
