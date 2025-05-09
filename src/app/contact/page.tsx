'use client';

import { useState, FormEvent } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', formData);
      
      // Show success message
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cornsilk">
      <Navbar />

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-pakistan-green mb-8">Contact Us</h1>
          
          {submitSuccess ? (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-green-100 p-4 rounded-md mb-4 text-black">
                <h2 className="text-xl font-bold mb-2">Message Sent Successfully!</h2>
                <p>Thank you for reaching out to us. We'll get back to you as soon as possible.</p>
              </div>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="bg-dark-moss-green text-white px-6 py-2 rounded-md hover:bg-opacity-90"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-black mb-6">
                Have questions or feedback about Anya Notes? We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-md mb-6">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-black font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-black font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-black font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-black font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                    required
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className={`bg-dark-moss-green text-white px-6 py-2 rounded-md font-medium ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-black">Other Ways to Contact Us</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-black mb-2">Email</h3>
                    <p className="text-black">contact@anyanotes.edu</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-black mb-2">Location</h3>
                    <p className="text-black">
                      Student Center, Room 205<br />
                      College Campus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
