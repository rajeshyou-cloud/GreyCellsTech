import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ(){
  const faqs = [
    { q: 'What is your typical project timeline?', a: 'Most projects take 8-16 weeks depending on complexity. We provide a detailed timeline during the discovery phase.' },
    { q: 'Do you provide support after launch?', a: 'Yes, we offer ongoing maintenance and support packages to ensure your solution runs smoothly.' },
    { q: 'What technologies do you use?', a: 'We use modern tech stacks: React, Node.js, Python, AWS, and more. We choose based on your project needs.' },
    { q: 'How much does a project cost?', a: 'Pricing varies based on scope. We provide custom quotes after the discovery phase.' },
    { q: 'Can you work with our existing team?', a: 'Absolutely! We often integrate with client teams and provide training.' }
  ];

  const [open, setOpen] = useState(null);

  return (
    <>
      <Helmet>
        <title>FAQ | GreyCells Technologies</title>
        <meta name="description" content="Frequently asked questions about our services, process, and pricing." />
      </Helmet>

      <div className="min-h-screen">
        <div className="bg-primary text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300">Find answers to common questions</p>
          </div>
        </div>

        <div className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-bold text-primary text-left">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 text-secondary transition ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-gray-700 border-t">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
