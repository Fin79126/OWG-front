'use client'
import React, { ReactNode } from 'react';
import Header from '@/components/layouts/header/Header';
import Footer from '@/components/layouts/footer/Footer';
import { bodyStyle } from '@/styles/app.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <html>
    <body className={bodyStyle}>
      <div>
          <Header />
          {/* Main content */}
          {children}
          <Footer />
      </div>
    </body>
  </html>
);

export default Layout;
