'use client';

import { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from '@/context/AuthContext';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user, register } = useAuth();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await register(name, email, password);
      router.push('/'); // Redirect to home page after successful registration
    } catch (error) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cornsilk flex flex-col">
      <Navbar />

      <div className="container mx-auto py-12 px-4 flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-black">Create an Account</h2>
            <p className="text-black">Join Anya Notes to access and share study materials</p>
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-black p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">              <label htmlFor="name" className="block text-black font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black placeholder-gray-500"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="mb-6">              <label htmlFor="email" className="block text-black font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black placeholder-gray-500"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-black font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                placeholder="••••••••"
                minLength={8}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-black font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black"
                placeholder="••••••••"
                minLength={8}
                required
              />
            </div>
            
            <button
              type="submit"
              className={`w-full bg-dark-moss-green text-black py-2 rounded-md font-medium ${
                isLoading ? 'opacity-70 cursor-not-allowed ' : 'hover:bg-opacity-90 '
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-black text-pakistan-green">
              Already have an account?{' '}
              <Link href="/login" className="text-earth-yellow hover:text-tigers-eye font-medium text-black">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}