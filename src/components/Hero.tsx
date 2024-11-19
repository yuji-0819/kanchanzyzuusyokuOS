import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400 via-purple-700 to-purple-900 text-white pt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEgLTFoM3YzaC0zeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-40"></div>
      <div className="container mx-auto px-4 py-20 relative">
        <div className="absolute top-10 right-10">
          <div className="bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-300/20 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-purple-100">残り募集枠: 17名様</span>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-serif mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100">
            新しい「気づき」との出会いが
            <br />
            あなたの人生を輝かせる
          </h1>
          <p className="text-xl text-purple-200 mb-12">
            心温まるオンラインコミュニティで、
            <br />
            あなたの魂の旅路をサポートします
          </p>
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-4 rounded-full text-lg font-medium hover:from-purple-500 hover:to-purple-400 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
              <Sparkles className="w-5 h-5" />
              <span>30日間無料でお試し</span>
            </button>
          </div>
        </div>
        <div className="mt-16">
          <img 
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94"
            alt="Spiritual Sunrise"
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}