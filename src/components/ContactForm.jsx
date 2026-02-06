import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    website_hp: '' // Honeypot field
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // TODO: Replace with your actual Apps Script URL if different
  const APPS_SCRIPT_URL = `https://script.google.com/macros/s/AKfycbxSntn34ihwM_64BusZGi_QWcHPapx5qvqo_CS5c09ro6LKaFwz417g46lq6aDZRjtubQ/exec`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.result === 'success') {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
          website_hp: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError('Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary/90 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tell us about your project. Our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-secondary" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:hello@greycellstech.com" className="text-white font-semibold hover:text-secondary transition">
                    hello@greycellstech.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-secondary" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+919880774315" className="text-white font-semibold hover:text-secondary transition">
                    +91 98807 74315
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-secondary" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            {submitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                <p className="text-green-200">✓ Thank you! We'll be in touch shortly.</p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
                <p className="text-red-200">{error}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-white font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition"
                  placeholder="+91 98807 74315"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-white font-semibold mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition"
                  placeholder="Your company"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-white font-semibold mb-2">Service Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-secondary transition"
                >
                  <option value="" className="bg-primary">Select a service</option>
                  <option value="Product Development" className="bg-primary">Product Development</option>
                  <option value="Digital Marketing" className="bg-primary">Digital Marketing</option>
                  <option value="AI Automations" className="bg-primary">AI Automations</option>
                  <option value="Consulting" className="bg-primary">Consulting</option>
                  <option value="Other" className="bg-primary">Other</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-white font-semibold mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-secondary transition"
                >
                  <option value="" className="bg-primary">Select budget range</option>
                  <option value="$0 - $10,000" className="bg-primary">$0 - $10,000</option>
                  <option value="$10,000 - $50,000" className="bg-primary">$10,000 - $50,000</option>
                  <option value="$50,000 - $100,000" className="bg-primary">$50,000 - $100,000</option>
                  <option value="$100,000+" className="bg-primary">$100,000+</option>
                  <option value="Not sure" className="bg-primary">Not sure</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Project Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition resize-none"
                placeholder="Tell us about your project, goals, and timeline..."
              ></textarea>
            </div>

            {/* Honeypot */}
            <input
              type="text"
              name="website_hp"
              value={formData.website_hp}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            <p className="text-gray-400 text-sm mt-4 text-center">
              * Required fields. We'll respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
