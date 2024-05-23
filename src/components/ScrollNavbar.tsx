"use client";

import React, { useState, useEffect, useRef } from "react";

const ScrollNavbar = ({ children }: { children: React.ReactNode }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      lastScrollY.current = window.scrollY;

      const handleScroll = () => {
        if (window.scrollY > lastScrollY.current) {
          setIsScrollingDown(true);
        } else {
          setIsScrollingDown(false);
        }
        lastScrollY.current = window.scrollY;
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <nav
      className={`z-[10] flex flex-row h-20 justify-between items-center w-full transition-all inset-x-0 top-0 ${
        isScrollingDown
          ? "sticky bg-white border-b border-gray-200"
          : "absolute bg-transparent"
      }`}
    >
      {children}
    </nav>
  );
};

export default ScrollNavbar;
