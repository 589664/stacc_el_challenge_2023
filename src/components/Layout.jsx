import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-4xl px-3 sm:px-10">{children}</main>
      <div className="flex-grow" />
      <Footer />
    </div>
  );
};

export default Layout;
