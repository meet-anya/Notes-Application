import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-cornsilk">
      <Navbar />

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-pakistan-green mb-8">About Anya Notes</h1>
          
          <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-dark-moss-green mb-4">Our Mission</h2>
            <p className="text-black mb-4">
              Anya Notes was created with a simple mission: to make education more accessible and collaborative
              for all students. We believe that knowledge should be shared freely, and that every student
              deserves access to quality study materials.
            </p>
            <p className="text-black">
              Our platform allows students to upload and access lecture notes, question papers, and other
              study materials, creating a community-driven resource that benefits everyone in our college.
            </p>
          </section>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-dark-moss-green mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-earth-yellow h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="font-bold text-pakistan-green mb-2">Upload</h3>
                <p className="text-black">Share your notes, question papers, and study materials with the community.</p>
              </div>
              <div className="text-center">
                <div className="bg-earth-yellow h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="font-bold text-pakistan-green mb-2">Browse</h3>
                <p className="text-black">Discover resources shared by other students for various courses and subjects.</p>
              </div>
              <div className="text-center">
                <div className="bg-earth-yellow h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="font-bold text-pakistan-green mb-2">Learn</h3>
                <p className="text-black">Download materials to enhance your studies and improve your academic performance.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-dark-moss-green mb-4">Guidelines for Uploading</h2>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>Upload only your own work or materials that you have permission to share.</li>
              <li>Ensure that uploaded content is accurate and of good quality.</li>
              <li>Do not upload copyrighted materials without proper authorization.</li>
              <li>Respect academic integrity - do not upload solutions to current assignments.</li>
              <li>Format your uploads properly with clear titles and descriptions.</li>
            </ul>
          </section>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-dark-moss-green mb-4">Contact Us</h2>
            <p className="text-black mb-6">
              If you have any questions, suggestions, or feedback about Anya Notes, please don&apos;t hesitate to reach out to us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-pakistan-green mb-2">Email</h3>
                <p className="text-black">contact@Anyanotes.edu</p>
              </div>
              <div>
                <h3 className="font-bold text-pakistan-green mb-2">Location</h3>
                <p className="text-black">Student Center, Room 205<br />College Campus</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="bg-tigers-eye hover:bg-opacity-90 text-white px-6 py-3 rounded-md inline-block">
                Send us a message
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}