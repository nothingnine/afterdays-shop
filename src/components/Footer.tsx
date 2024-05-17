import { Copyright } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="absolute w-full border-linsticky h-14 inset-x-0 bottom-0 border-t 
    border-gray-200 bg-white/75 backdrop-blur-lg pt-3 pl-20"
    >
      <span className="flex flex-row text-gray-400 items-center">
        <Copyright className="w-4 pr-1 h-fit" />
        <h1 className="text-xs text-gray-400">afterdays by nothingnine</h1>
      </span>
    </footer>
  );
};

export default Footer;
