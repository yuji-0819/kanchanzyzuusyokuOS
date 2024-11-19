import React from 'react';
import { Sparkles, Moon, Users } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900/95 via-purple-800/95 to-purple-900/95 text-white fixed w-full z-50 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Moon className="w-6 h-6 text-purple-200" />
          <span className="text-xl font-serif">心の光輪サロン</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="bg-purple-800/50 px-4 py-1 rounded-full border border-purple-600/30 flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 text-sm">残り17名様</span>
          </div>
          <a href="#features" className="hover:text-purple-200 transition-colors">特徴</a>
          <a href="#testimonials" className="hover:text-purple-200 transition-colors">体験談</a>
          <button className="bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-400 hover:to-purple-300 px-6 py-2 rounded-full transition-all flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>無料体験</span>
          </button>
        </div>
      </nav>
    </header>
  );
}