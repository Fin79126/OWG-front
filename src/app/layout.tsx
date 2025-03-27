"use client";
import React, { ReactNode } from "react";
import { ThemeProvider, useColor } from "@/hooks/useColor";
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";
import { coverStyle, mainStyle, displayStyle } from "@/styles/app.css";
import { notoSansJp } from "@/styles/fonts";

interface LayoutProps {
  children: ReactNode;
}

function MainWrapper({ children }: { children: ReactNode }) {
  const { color } = useColor(); //  ここなら useTheme() が動く！
  const mainColor = `linear-gradient(to bottom,${color}, #ffffff)`;
  return (
    <main style={{ background: mainColor }} className={mainStyle}>
      {children}
    </main>
  );
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>
        <div className={displayStyle}>
          <Header />
          <ThemeProvider>
            <MainWrapper>
              <a className={coverStyle}>{children}</a>
              <Footer />
            </MainWrapper>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
};

export default Layout;
