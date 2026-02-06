import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar } from 'lucide-react';

export default function Blog(){
  const posts = [
    { title: 'Top 5 AI Automation Trends in 2026', date: 'Feb 5, 2026', excerpt: 'Discover how AI is reshaping business automation and what it means for your company.' },
    { title: 'Why Custom Software Beats Off-the-Shelf Solutions', date: 'Jan 28, 2026', excerpt: 'A deep dive into the benefits of tailored software development for your unique needs.' },
    { title: 'Mobile-First Design: Best Practices', date: 'Jan 15, 2026', excerpt: 'Essential tips for creating responsive, user-friendly applications.' }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | GreyCells Technologies</title>
        <meta name="description" content="Latest insights on technology, AI, automation, and digital transformation." />
      </Helmet>

      <div className="min-h-screen">
        <div className="bg-primary text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
            <p className="text-xl text-gray-300">Latest trends and best practices in technology</p>
          </div>
        </div>

        <div className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto space-y-6">
            {posts.map((post, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer">
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
                <a href="#" className="text-secondary font-semibold mt-4 inline-block hover:underline">Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
