import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "最初は不安でしたが、優しい仲間に出会えて本当に良かったです。毎朝の気づきメッセージを読むのが、今では私の幸せな日課になっています。",
      author: "Mさん",
      title: "60代・女性"
    },
    {
      quote: "サロンでの学びのおかげで、同じ毎日でも見方が変わり、新鮮な気持ちで過ごせるようになりました。家族との関係も、驚くほど良くなってきています。",
      author: "Kさん",
      title: "50代・男性"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-16">
          参加者からの心温まる声
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-purple-800/50 p-8 rounded-xl backdrop-blur-sm">
              <Quote className="w-8 h-8 text-purple-300 mb-4" />
              <p className="text-lg mb-6 text-purple-100">{testimonial.quote}</p>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-purple-300">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}