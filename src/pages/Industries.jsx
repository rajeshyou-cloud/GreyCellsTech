import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Industries(){
  const industries = [
    { name: 'E-commerce', desc: 'Custom platforms, payment integrations, inventory management' },
    { name: 'SaaS', desc: 'Scalable cloud solutions, multi-tenant architecture' },
    { name: 'Healthcare', desc: 'HIPAA-compliant systems, patient portals, telemedicine' },
    { name: 'FinTech', desc: 'Payment processing, lending platforms, blockchain integration' },
    { name: 'Real Estate', desc: 'Property management systems, virtual tours, CRM integration' },
    { name: 'Education', desc: 'Learning platforms, student management, course delivery' }
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve | GreyCells Technologies</title>
        <meta name="description" content="Industry-specific solutions for e-commerce, SaaS, healthcare, fintech, real estate, education and more." />
      </Helmet>

      <div className="min-h-screen">
        <div className="bg-primary text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
            <p className="text-xl text-gray-300">Expertise across multiple sectors with tailored solutions</p>
          </div>
        </div>

        <div className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <h3 className="text-xl font-bold text-primary mb-2">{ind.name}</h3>
                  <p className="text-gray-600">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 px-4 bg-primary text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Your Industry Not Listed?</h2>
          <Link to="/contact" className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-8 rounded-lg inline-block">
            Tell Us About Your Project
          </Link>
        </div>
      </div>
    </>
  );
}
