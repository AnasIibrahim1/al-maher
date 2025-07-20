import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const MainLayout = ({ children, showFooter = true }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <main className="" style={{minHeight: 'calc(100vh - 200px)'}}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
