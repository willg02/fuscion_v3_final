import React from 'react';

const Footer = () => {
  return (
    <footer className="py-[60px] px-6 text-center bg-sanctuary">
      <div className="max-w-[680px] mx-auto space-y-2 text-footer-text leading-relaxed-body">
        <p className="text-[18px] font-semibold text-charcoal">
          FUSCION<sup className="text-xs">TM</sup>
        </p>
        <p className="text-[16px]">Flow gently into a healthy, meaningful life.</p>
        <p className="text-[14px]">© 2025 IHHI, LLC. All rights reserved.</p>
        <p className="text-[14px]">
          Email: <a href="mailto:drdalsania@fuscion.com" className="hover:underline">drdalsania@fuscion.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
