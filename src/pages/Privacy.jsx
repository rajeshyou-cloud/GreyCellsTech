import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Privacy(){
  return (
    <>
      <Helmet>
        <title>Privacy Policy | GreyCells Technologies</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">1. Information We Collect</h2>
            <p className="text-gray-700 mb-2">We collect information you provide when contacting us through our website, including name, email, phone, and project details.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-2">We use your information to respond to inquiries, provide services, and improve our offerings. We do not sell or share your data with third parties.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">3. Data Security</h2>
            <p className="text-gray-700 mb-2">We implement industry-standard security measures to protect your personal information.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">4. Contact Us</h2>
            <p className="text-gray-700">If you have privacy concerns, contact us at hello@greycellstech.com</p>
          </section>
        </div>
      </div>
    </>
  );
}
