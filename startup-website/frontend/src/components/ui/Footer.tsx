import Link from "next/link";
import React from "react";

const Footer = () => (
  <footer className="bg-gradient-to-t from-black to-gray-950/20 border-t border-gray-800/40 backdrop-blur-sm relative z-10 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:justify-between md:items-start gap-12">
      {/* Company Info */}
      <div className="flex-1 min-w-[260px] mb-8 md:mb-0">
        <h3 className="text-2xl font-bold font-orbitron bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-4 tracking-tight select-none">
          SKY AI
        </h3>
        <p className="text-gray-300 mb-4 font-light max-w-md">
          SKY AI is an innovative technology firm specializing in AI integration for the corporate landscape. We transform advanced research into practical, everyday solutions that drive business growth and efficiency.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <a href="mailto:info@sky-ai.in" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="none"/><path d="M22 6.5V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.5M22 6.5l-10 7-10-7"/></svg>
            info@sky-ai.in
          </a>
          <a href="tel:+91 9783982649" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 21 18.91V21z"/></svg>
            +91 9783982649
          </a>
        </div>
      </div>
      {/* Quick Links */}
      <div className="flex-1 min-w-[180px] mb-8 md:mb-0">
        <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link href="/Aboutus" className="hover:text-white transition-colors">About Us</Link></li>
          <li><Link href="/Careers" className="hover:text-white transition-colors">Careers</Link></li>
          <li><Link href="/Blogs" className="hover:text-white transition-colors">Blogs</Link></li>
          <li><Link href="/Contact" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </div>
      {/* Social & Address */}
      <div className="flex-1 min-w-[220px]">
        <h4 className="text-lg font-semibold text-white mb-3">Connect with Us</h4>
        <div className="flex gap-4 mb-4">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/sky-advanced-research-llp/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
          </a>
        </div>
        <div className="text-gray-400 text-sm">
          A-234 Kardhani Scheme Kalwar Road<br />Jaipur, Rajasthan, 302012 <br />India
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800/30 mt-12 pt-8 text-center">
      <p className="text-gray-500 text-sm font-light">
        © 2025 SKY AI. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer; 