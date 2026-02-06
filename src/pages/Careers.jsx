import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers(){
  const jobs = [
    { title: 'Senior React Developer', type: 'Full-time', location: 'Bangalore, India' },
    { title: 'AI/ML Engineer', type: 'Full-time', location: 'Bangalore, India' },
    { title: 'Product Manager', type: 'Full-time', location: 'Remote' }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | GreyCells Technologies</title>
        <meta name="description" content="Join our team of talented developers and designers. We're hiring!" />
      </Helmet>

      <div className="min-h-screen">
        <div className="bg-primary text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-300">Help us build the future of technology</p>
          </div>
        </div>

        <div className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">Why Join GreyCells?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">Work with cutting-edge technology, collaborate with talented professionals, and make an impact on real-world projects.</p>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-6">Open Positions</h3>
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Briefcase className="w-8 h-8 text-secondary" />
                    <div>
                      <h4 className="text-lg font-bold text-primary">{job.title}</h4>
                      <p className="text-gray-600">{job.type} • {job.location}</p>
                    </div>
                  </div>
                  <a href="#" className="text-secondary font-semibold hover:underline">Apply →</a>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Don't see a position that fits? Send us your resume!</p>
              <Link to="/contact" className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-8 rounded-lg inline-block">
                Send Your Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
