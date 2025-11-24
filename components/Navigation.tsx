'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/50 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.5 1.5H5.75C4.23 1.5 3 2.73 3 4.25v11.5C3 17.27 4.23 18.5 5.75 18.5h8.5c1.52 0 2.75-1.23 2.75-2.75V8m-8-6.5v6.5m0 0h6.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          TechBiz
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-blue-50">
          Home
        </Link>
        <a href="#about" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-blue-50">
          About
        </a>
        <a href="#features" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-blue-50">
          Features
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">
          Sign In
        </button>
        <button className="px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>

    {/* Mobile Navigation */}
    {mobileMenuOpen && (
      <div className="md:hidden border-t border-slate-200/50 bg-gradient-to-b from-white to-slate-50/50 animate-in fade-in slide-in-from-top-2 duration-200">
        <div className="px-2 py-3 space-y-1">
          <Link href="/" className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
            Home
          </Link>
          <a href="#about" className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
            About
          </a>
          <a href="#features" className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
            Features
          </a>
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-200/50">
            <button className="w-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-200">
              Sign In
            </button>
            <button className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
</nav>
  );
}