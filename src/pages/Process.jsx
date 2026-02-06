import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';

export default function Process(){
  const steps = [
    { num: '01', title: 'Discovery', desc: 'Understand your goals, challenges, and vision' },
    { num: '02', title: 'Strategy', desc: 'Develop a comprehensive roadmap and timeline' },
    { num: '03', title: 'Design', desc: 'Create intuitive UX/UI aligned with your brand' },
    { num: '04', title: 'Development', desc: 'Build scalable, maintainable solutions' },
    { num: '05', title: 'Testing', desc: 'Rigorous QA to ensure quality and reliability' },
    { num: '06', title: 'Launch & Support', desc: 'Deploy and provide ongoing support' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Process | GreyCells Technologies</title>
        <meta name="description" content="Learn how we work: our proven methodology for successful project delivery." />
      </Helmet>

      <div className="min-h-screen">
        <div className="bg-primary text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h1>
            <p className="text-xl text-gray-300">A proven methodology for delivering excellence</p>
          </div>
        </div>

        <div className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-lg relative">
                  <div className="text-4xl font-bold text-secondary mb-4 opacity-20">{step.num}</div>
                  <div className="absolute top-8 left-8">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 mt-4">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
