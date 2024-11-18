import React from 'react';

const features = [
  {
    title: 'Neural Machine Translation',
    description: 'Powered by state-of-the-art AI models for accurate translations'
  },
  {
    title: 'Real-time Translation',
    description: 'Get instant translations as you type with minimal latency'
  },
  {
    title: 'Multiple Languages',
    description: 'Support for 10+ major world languages and growing'
  }
];

export default function Features() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-300 hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-600 hover:text-white">
          <h3 className="text-lg font-semibold text-blue-400 hover:blue-600 cursor-pointer">{feature.title}</h3>
          <p className="mt-2 text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}