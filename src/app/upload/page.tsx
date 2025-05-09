'use client';

import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from '@/context/AuthContext';

export default function Upload() {
  const { user } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    courseCode: '',
    semester: '',
    description: '',
    documentType: 'notes', // Default value
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    if (!user) {
      router.push('/login?redirect=/upload');
    }
  }, [user, router]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // In a real application, you would upload to a server here
    // For demonstration purposes, we'll simulate an API call
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // This would be sent to the backend in a real app
      const uploadData = {
        ...formData,
        userId: user?.id,
        userName: user?.name,
        userEmail: user?.email,
        uploadDate: new Date().toISOString(),
        id: Math.random().toString(36).substring(2, 15),
        fileType: file ? file.name.split('.').pop()?.toUpperCase() : 'PDF',
        fileName: file ? file.name : 'document.pdf',
      };
      
      console.log('Form submitted:', uploadData);
      console.log('File:', file);
      
      // Store upload in local storage for demo purposes
      const uploads = JSON.parse(localStorage.getItem('uploads') || '[]');
      uploads.push(uploadData);
      localStorage.setItem('uploads', JSON.stringify(uploads));
      
      // Simulate successful submission
      setSubmitSuccess(true);
      setFormData({
        title: '',
        subject: '',
        courseCode: '',
        semester: '',
        description: '',
        documentType: 'notes',
      });
      setFile(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('An error occurred while uploading. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // If user is not authenticated, don't render the form yet
  if (!user) {
    return (
      <div className="min-h-screen bg-cornsilk flex flex-col">
        <Navbar />
        <div className="container mx-auto py-16 px-4 flex-grow flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
            <h1 className="text-2xl font-bold mb-4 text-black">Authentication Required</h1>
            <p className="text-black mb-6">Please log in to upload materials.</p>
            <Link href="/login?redirect=/upload" className="bg-dark-moss-green text-white px-6 py-2 rounded-md inline-block hover:bg-opacity-90">
              Go to Login
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cornsilk flex flex-col">
      <Navbar />

      <div className="container mx-auto py-8 px-4 flex-grow">        <h1 className="text-3xl font-bold mb-2 text-pakistan-green">Upload Learning Materials</h1>
        <p className="text-black font-medium mb-8">Share your notes, question papers, and study materials with your fellow students.</p>

        {submitSuccess ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-green-100 p-4 rounded-md mb-4">
              <h3 className="font-bold text-lg text-black">Upload Successful!</h3>
              <p className="text-black">Thank you for contributing to Anya Notes. Your document will be available after review.</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="bg-dark-moss-green hover:bg-opacity-90 text-white px-4 py-2 rounded-md"
              >
                Upload Another Document
              </button>              <Link href="/my-uploads" className="bg-earth-yellow hover:bg-tigers-eye text-black px-4 py-2 rounded-md">
                View My Uploads
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            {submitError && (
              <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4">
                {submitError}
              </div>
            )}
            
            <div className="bg-cornsilk p-4 rounded-md mb-6 border border-earth-yellow">
              <p className="text-black">Uploading as <strong>{user.name}</strong> ({user.email})</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">              <div>
                <label htmlFor="title" className="block text-black font-medium mb-2">Document Title*</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                  required
                />
              </div>
                <div>
                <label htmlFor="subject" className="block text-black font-medium mb-2">Subject*</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                  required
                />
              </div>
                <div>
                <label htmlFor="courseCode" className="block text-black font-medium mb-2">Course Code</label>
                <input
                  type="text"
                  id="courseCode"
                  name="courseCode"
                  value={formData.courseCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                />
              </div>
                <div>
                <label htmlFor="semester" className="block text-black font-medium mb-2">Semester</label>
                <input
                  type="text"
                  id="semester"
                  name="semester"
                  value={formData.semester}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                />
              </div>
                <div className="md:col-span-2">
                <label htmlFor="description" className="block text-black font-medium mb-2">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                />
              </div>
                <div>
                <label htmlFor="documentType" className="block text-black font-medium mb-2">Document Type*</label>
                <select
                  id="documentType"
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                  required
                >
                  <option value="notes">Notes</option>
                  <option value="questionPaper">Question Paper</option>
                  <option value="syllabus">Syllabus</option>
                  <option value="practicalGuide">Practical Guide</option>
                  <option value="other">Other</option>
                </select>
              </div>
                <div>
                <label htmlFor="file" className="block text-black font-medium mb-2">Upload File* (PDF, DOCX, PPT)</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                  accept=".pdf,.doc,.docx,.ppt,.pptx"
                  required
                />
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-6">              <div className="flex justify-end gap-4">
                <Link href="/" className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-black">Cancel</Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-dark-moss-green text-white px-6 py-2 rounded-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'}`}
                >
                  {isSubmitting ? 'Uploading...' : 'Upload Document'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      
      <Footer />
    </div>
  );
}