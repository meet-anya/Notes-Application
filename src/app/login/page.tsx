'use client';

import { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user, login } = useAuth();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      router.push('/'); // Redirect to home page after successful login
    } catch (error) {
      setError('Invalid email or password. Please try again.');
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
            <h2 className="text-2xl font-bold mb-2 text-black">Log in to Anya Notes</h2>
            <p className="text-black">Access your study materials and contributions</p>
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-black p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">              <label htmlFor="email" className="block text-black font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green placeholder-gray-500"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="mb-6">
              <div className=" text-black flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-pakistan-green font-medium">Password</label>
                <Link href="/forgot-password" className=" text-black text-sm text-earth-yellow hover:text-tigers-eye">
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green"
                placeholder="••••••••"
                required
              />
            </div>
            
            <button
              type="submit"
              className={`w-full bg-dark-moss-green text-black py-2 rounded-md font-medium ${
                isLoading ? 'opacity-70 cursor-not-allowed ' : 'hover:bg-opacity-90'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className=" text-black text-pakistan-green">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-earth-yellow hover:text-tigers-eye font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}