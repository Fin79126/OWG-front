'use client'

import React from 'react';
import { footerStyle, textStyle, footerFixedStyle } from './Footer.css';

const Footer: React.FC = () => {
  const [isFixed, setIsFixed] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      const contentHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      setIsFixed(contentHeight <= windowHeight);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className={isFixed ? footerFixedStyle : footerStyle}>
      <p className={textStyle}>Footer</p>
    </footer>
  );
};

export default Footer;
