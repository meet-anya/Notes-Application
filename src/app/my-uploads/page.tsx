'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from '@/context/AuthContext';

// Define the Upload type
interface Upload {
  id: string;
  title: string;
  subject: string;
  courseCode: string;
  semester: string;
  description: string;
  documentType: string;
  userId: string;
  userName: string;
  userEmail: string;
  uploadDate: string;
  fileType: string;
  fileName: string;
}

export default function MyUploads() {
  const { user } = useAuth();
  const router = useRouter();
  const [uploads, setUploads] = useState<Upload[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    if (!user) {
      router.push('/login?redirect=/my-uploads');
      return;
    }

    // Fetch user uploads from localStorage (would be an API call in a real app)
    const allUploads = JSON.parse(localStorage.getItem('uploads') || '[]');
    const userUploads = allUploads.filter((upload: Upload) => upload.userId === user.id);
    setUploads(userUploads);
    setIsLoading(false);
  }, [user, router]);

  const handleDelete = (id: string) => {
    // Remove the upload from localStorage
    const allUploads = JSON.parse(localStorage.getItem('uploads') || '[]');
    const updatedUploads = allUploads.filter((upload: Upload) => upload.id !== id);
    localStorage.setItem('uploads', JSON.stringify(updatedUploads));
    
    // Update the state
    const userUploads = updatedUploads.filter((upload: Upload) => upload.userId === user?.id);
    setUploads(userUploads);
  };

  // If user is not authenticated, don't render the page yet
  if (!user) {
    return (
      <div className="min-h-screen bg-cornsilk flex flex-col">
        <Navbar />
        <div className="container mx-auto py-16 px-4 flex-grow flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
            <h1 className="text-2xl font-bold mb-4 text-pakistan-green">Authentication Required</h1>
            <p className="text-black mb-6">Please log in to view your uploads.</p>
            <Link href="/login?redirect=/my-uploads" className="bg-dark-moss-green text-white px-6 py-2 rounded-md inline-block hover:bg-opacity-90">
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

      <div className="container mx-auto py-8 px-4 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-pakistan-green">My Uploads</h1>
          <Link href="/upload" className="bg-dark-moss-green hover:bg-opacity-90 text-white px-4 py-2 rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Upload New Material
          </Link>
        </div>

        {isLoading ? (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-black">Loading your uploads...</p>
          </div>
        ) : uploads.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold text-pakistan-green mb-4">No Uploads Yet</h2>
            <p className="text-black mb-6">You haven't uploaded any materials yet.</p>
            <Link href="/upload" className="bg-dark-moss-green hover:bg-opacity-90 text-white px-6 py-3 rounded-md inline-block">
              Upload Your First Document
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uploads.map((upload) => (
              <div key={upload.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className={`p-4 ${upload.documentType === 'notes' ? 'bg-dark-moss-green' : 'bg-tigers-eye'}`}>
                  <div className="flex justify-between items-center">
                    <span className="bg-earth-yellow text-pakistan-green text-xs font-bold px-2 py-1 rounded">
                      {upload.documentType.charAt(0).toUpperCase() + upload.documentType.slice(1)}
                    </span>
                    <span className="bg-pakistan-green text-white text-xs font-bold px-2 py-1 rounded">
                      {upload.fileType}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-pakistan-green mb-2">{upload.title}</h3>
                  <div className="text-sm text-black mb-4">
                    <p>Subject: {upload.subject}</p>
                    {upload.courseCode && <p>Course: {upload.courseCode}</p>}
                    {upload.semester && <p>Semester: {upload.semester}</p>}
                  </div>
                  {upload.description && (
                    <div className="text-sm text-black mb-4">
                      <p className="font-medium">Description:</p>
                      <p>{upload.description}</p>
                    </div>
                  )}
                  <div className="text-xs text-black mb-4">
                    <p>Uploaded on: {new Date(upload.uploadDate).toLocaleDateString()}</p>
                    <p>File: {upload.fileName}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() => handleDelete(upload.id)}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm hover:bg-red-200 transition-colors"
                    >
                      Delete
                    </button>
                    <span className="text-black text-sm italic">
                      {upload.documentType === 'notes' ? 'Notes' : 'Question Paper'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}