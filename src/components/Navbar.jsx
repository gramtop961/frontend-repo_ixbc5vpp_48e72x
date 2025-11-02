import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

const Navbar = ({ onOpenAuth }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-sm" />
          <span className="text-xl font-semibold tracking-tight">HoloShop</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-700">
          <a href="#products" className="hover:text-black transition-colors">Products</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAuth}
            className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
          >
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Login / Sign up</span>
            <span className="sm:hidden">Sign in</span>
          </button>
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-3 py-2 text-sm font-medium hover:bg-zinc-900"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
