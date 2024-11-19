import React from 'react';
import { Sparkles, ArrowRight, Clock, Users, Star } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-4 mb-12">
          <div className="bg-purple-100 px-4 py-2 rounded-full flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-600" />
            <span className="text-purple-900">募集期間残り3日</span>
          </div>
          <div className="bg-purple-100 px-4 py-2 rounded-full flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-600" />
            <span className="text-purple-900">残り17名様限定</span>
          </div>
        </div>
        <h2 className="text-4xl font-serif mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700">
          さあ、新しい一歩を踏み出してみませんか？
        </h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-200 to-transparent px-6 py-2 rounded-bl-2xl">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-purple-900 font-medium">限定特典付き</span>
            </div>
          </div>
          <div className="text-lg text-purple-900 mb-8">
            <Sparkles className="w-6 h-6 inline-block mr-2 text-purple-500" />
            <span className="font-medium">今なら特別な30日間お試し期間</span>
          </div>
          <ul className="text-left mb-8 space-y-4">
            {[
              "30日間無料でサロンの温かさを体験",
              "【先着17名様限定】心を整える「祈りの護符」をプレゼント",
              "【期間限定】住職からの心を込めた個別メッセージをお届け",
              "【特別特典】月に1回の個別オンラインカウンセリング付き"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg">
                <ArrowRight className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-purple-900">{item}</span>
              </li>
            ))}
          </ul>
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-purple-500 hover:to-purple-400 transition-all transform hover:scale-105">
              今すぐ無料お試しに参加する
            </button>
          </div>
          <p className="mt-6 text-gray-600">
            一歩踏み出す勇気を持ったあなたを、
            <br />
            心温まるコミュニティで、優しくお迎えします。
          </p>
        </div>
      </div>
    </section>
  );
}