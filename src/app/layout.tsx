'use client'
import React, { ReactNode } from 'react';
import Header from '@/components/layouts/header/Header';
import Footer from '@/components/layouts/footer/Footer';
import Sidebar from '@/components/elements/sidebar/sidebar';
import { bodyStyle } from '@/styles/app.css';
import { notoSansJp } from "@/styles/fonts";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <html>
    <body className={`${notoSansJp.className} ${bodyStyle}`}>
      <div>
          <Header />
          <Sidebar />
          {/* Main content */}
          {children}
          <Footer />
      </div>
    </body>
  </html>
);

export default Layout;
