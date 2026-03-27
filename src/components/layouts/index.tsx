"use client";

import { Provider } from "react-redux";
import React from "react";

import Navbar from "./Navbar";
import Footer from "@/components/Footer/Footer";

import { store } from "@/utils/store";

interface LayoutsProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutsProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Provider store={store}>
        <Navbar />
        <main className="w-full flex-1 scroll-smooth transition-all duration-300 bg-white">
          {children}
        </main>
        <Footer />
      </Provider>
    </div>
  );
}