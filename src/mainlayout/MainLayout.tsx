import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
