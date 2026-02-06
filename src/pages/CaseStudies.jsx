import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies(){
  const cases = [
    { title: 'E-commerce Platform Redesign', client: 'Fashion Retailer', result: '150% increase in online sales', impact: 'Built responsive platform with AI recommendations' },
    { title: 'AI-Powered Automation', client: 'Logistics Company', result: '40% cost reduction', impact: 'Automated document processing and routing' },
    { title: 'SaaS MVP Launch', client: 'B2B Startup', result: '5000+ users in 3 months', impact: 'Built scalable cloud platform from scratch' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | GreyCells Technologies</title>
        <meta name="description" content="See how we helped businesses transform with technology and achieve measurable results." />
      </Helmet>

      <div className="min-h-screen">
        <div className="bg-primary text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-xl text-gray-300">Real results from real clients</p>
          </div>
        </div>

        <div className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto space-y-8">
            {cases.map((c, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{c.title}</h3>
                    <p className="text-gray-600">{c.client}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-gray-700 mb-4">{c.impact}</p>
                <div className="bg-secondary/10 border-l-4 border-secondary p-4">
                  <p className="text-lg font-semibold text-primary">{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
