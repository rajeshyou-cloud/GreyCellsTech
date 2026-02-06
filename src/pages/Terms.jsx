import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Terms(){
  return (
    <>
      <Helmet>
        <title>Terms of Service | GreyCells Technologies</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-primary mb-8">Terms of Service</h1>
          
          <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-2">By using this website and our services, you agree to these terms and conditions.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">2. Services Description</h2>
            <p className="text-gray-700 mb-2">GreyCells Technologies provides software development, AI automation, and digital marketing services as described on our website.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">3. Client Responsibilities</h2>
            <p className="text-gray-700 mb-2">Clients are responsible for providing accurate information and timely feedback during project execution.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">4. Limitation of Liability</h2>
            <p className="text-gray-700">GreyCells Technologies is not liable for any indirect or consequential damages arising from our services.</p>
          </section>
        </div>
      </div>
    </>
  );
}
