import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-moss-green to-pakistan-green text-cornsilk py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">College Learning Made Easy</h2>
              <p className="text-xl mb-8">Access notes, question papers, and study materials all in one place. Made for students, by students.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/notes" className="bg-earth-yellow hover:bg-tigers-eye text-pakistan-green px-6 py-3 rounded-md font-medium transition-colors text-center">
                  Browse Notes
                </Link>
                <Link href="/upload" className="bg-cornsilk text-pakistan-green hover:bg-opacity-90 px-6 py-3 rounded-md font-medium transition-colors text-center">
                  Upload Materials
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-cornsilk p-6 rounded-lg shadow-lg max-w-md">
                <div className="bg-white p-4 rounded shadow-inner">
                  <h3 className="text-pakistan-green font-bold mb-2">Physics Notes</h3>
                  <p className="text-black text-sm mb-2">Quantum Mechanics - Chapter 4</p>
                  <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
                    <span className="text-xs text-black">Uploaded 2 days ago</span>
                    <span className="bg-earth-yellow text-xs text-pakistan-green px-2 py-1 rounded-full">PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cornsilk">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-pakistan-green">Why Use Anya Notes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-dark-moss-green text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-pakistan-green">Access Notes</h3>
              <p className="text-black">Find comprehensive notes for all subjects, organized by department and course.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-earth-yellow text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-pakistan-green">Question Papers</h3>
              <p className="text-black">Practice with previous years&apos; question papers to ace your exams.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-tigers-eye text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-pakistan-green">Share Resources</h3>
              <p className="text-black">Contribute to the community by uploading your own notes and materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-earth-yellow text-pakistan-green py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to enhance your college experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join Anya Notes today and get access to a growing collection of study materials contributed by students like you.</p>
          <Link href="/register" className="bg-pakistan-green text-cornsilk px-8 py-4 rounded-md font-bold text-lg inline-block">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
