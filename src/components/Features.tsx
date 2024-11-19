import React from 'react';
import { Heart, Users, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      title: "毎日の「小さな気づき」",
      description: "朝の光のように、心を温める「気づきのメッセージ」をお届け。新しい一日への希望が芽生えます。"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "心からの交流と絆",
      description: "同じ想いを持つ仲間との出会いが、あなたの心を癒し、「ひとりじゃない」という安心感を届けます。"
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-400" />,
      title: "心が整う神聖な時間",
      description: "住職と共に過ごす瞑想や祈りの時間で、心の中に静けさと清らかさが戻ってきます。"
    }
  ];

  return (
    <section id="features" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-16 text-purple-900">
          サロンで見つかる3つの宝物
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-4 text-purple-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}