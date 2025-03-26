'use client'
import React, { ReactNode } from 'react';
import Header from '@/components/layouts/header/Header';
import Footer from '@/components/layouts/footer/Footer';
import { coverStyle , mainStyle , displayStyle } from '@/styles/app.css';
import { notoSansJp } from "@/styles/fonts";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <html lang="ja">
    <body className={notoSansJp.className}>
      <div className={displayStyle}>
          <Header />
          <main className={mainStyle}>
              <a className={coverStyle}>
              {children}
              </a>
            <Footer />
          </main>
          
      </div>
    </body>
  </html>
);

export default Layout;
