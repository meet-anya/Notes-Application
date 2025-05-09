'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };
  
  return (
    <header className="bg-pakistan-green text-cornsilk p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold hover:text-earth-yellow transition-colors">Anya Notes</Link>
          <span className="bg-tigers-eye px-2 py-1 rounded-md text-xs">BETA</span>
        </div>
        <div className="flex items-center">
          <nav className="mr-4">
            <ul className="flex space-x-4 md:space-x-8">
              <li>
                <Link href="/" className={isActive('/') ? 'text-earth-yellow' : 'hover:text-earth-yellow transition-colors'}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/notes" className={isActive('/notes') ? 'text-earth-yellow' : 'hover:text-earth-yellow transition-colors'}>
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/papers" className={isActive('/papers') ? 'text-earth-yellow' : 'hover:text-earth-yellow transition-colors'}>
                  Question Papers
                </Link>
              </li>
              <li>
                <Link href="/upload" className={isActive('/upload') ? 'text-earth-yellow' : 'hover:text-earth-yellow transition-colors'}>
                  Upload
                </Link>
              </li>
              <li>
                <Link href="/about" className={isActive('/about') ? 'text-earth-yellow' : 'hover:text-earth-yellow transition-colors'}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* User Authentication Section */}
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-dark-moss-green hover:bg-opacity-90 text-white px-4 py-2 rounded-md flex items-center"
              >
                <span className="mr-2">{user.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link 
                    href="/profile" 
                    className="block px-4 py-2 text-black hover:bg-cornsilk" 
                    onClick={() => setShowDropdown(false)}
                  >
                    Profile
                  </Link>
                  <Link 
                    href="/my-uploads" 
                    className="block px-4 py-2 text-black hover:bg-cornsilk"
                    onClick={() => setShowDropdown(false)}
                  >
                    My Uploads
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-cornsilk"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link href="/login" className="bg-earth-yellow hover:bg-tigers-eye text-pakistan-green px-4 py-2 rounded-md font-medium">
                Log In
              </Link>
              <Link href="/register" className="bg-dark-moss-green hover:bg-opacity-90 text-white px-4 py-2 rounded-md font-medium">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}