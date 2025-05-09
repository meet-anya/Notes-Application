import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// Dummy data for demonstration purposes
const notesData = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    subject: "Computer Science",
    courseCode: "CS101",
    semester: "Fall 2024",
    uploadDate: "2025-04-15",
    fileType: "PDF",
    pages: 42,
    views: 328,
    downloads: 156,
  },
  {
    id: 2,
    title: "Quantum Mechanics Notes",
    subject: "Physics",
    courseCode: "PHY302",
    semester: "Spring 2025",
    uploadDate: "2025-04-20",
    fileType: "PDF",
    pages: 78,
    views: 214,
    downloads: 89,
  },
  {
    id: 3,
    title: "Organic Chemistry Lab Manual",
    subject: "Chemistry",
    courseCode: "CHEM220",
    semester: "Spring 2025",
    uploadDate: "2025-04-18",
    fileType: "DOCX",
    pages: 36,
    views: 175,
    downloads: 92,
  },
  {
    id: 4,
    title: "Calculus II Complete Notes",
    subject: "Mathematics",
    courseCode: "MATH202",
    semester: "Fall 2024",
    uploadDate: "2025-04-22",
    fileType: "PDF",
    pages: 65,
    views: 301,
    downloads: 143,
  },
  {
    id: 5,
    title: "Introduction to Psychology",
    subject: "Psychology",
    courseCode: "PSY101",
    semester: "Spring 2025",
    uploadDate: "2025-04-25",
    fileType: "PDF",
    pages: 53,
    views: 189,
    downloads: 76,
  },
  {
    id: 6,
    title: "Data Structures and Algorithms",
    subject: "Computer Science",
    courseCode: "CS202",
    semester: "Spring 2025",
    uploadDate: "2025-05-02",
    fileType: "PDF",
    pages: 87,
    views: 142,
    downloads: 64,
  },
];

export default function Notes() {
  return (
    <div className="min-h-screen flex flex-col bg-cornsilk">
      <Navbar />

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-pakistan-green mb-2">Course Notes</h1>
            <p className="text-black">Browse and download notes shared by your college community</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <div className="relative">              <input
                type="text"
                placeholder="Search notes..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black placeholder-gray-500"
              /><svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black absolute left-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-moss-green text-black">
              <option value="">All Subjects</option>
              <option value="computer-science">Computer Science</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="psychology">Psychology</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notesData.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-dark-moss-green p-4">
                <div className="flex justify-between items-center">
                  <span className="bg-tigers-eye text-white text-xs font-bold px-2 py-1 rounded">
                    {note.subject}
                  </span>
                  <span className="bg-earth-yellow text-pakistan-green text-xs font-bold px-2 py-1 rounded">
                    {note.fileType}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-black mb-2">
                  {note.title}
                </h3>                
                <div className="text-sm text-black mb-4">
                  <p>Course: {note.courseCode}</p>
                  <p>Semester: {note.semester}</p>
                </div>
                <div className="flex justify-between items-center text-xs text-black mb-4">
                  <span>{note.pages} pages</span>
                  <span>
                    Uploaded on {new Date(note.uploadDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="flex items-center">                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-black mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {note.views}
                    </span>
                    <span className="flex items-center">                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-black mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      {note.downloads}
                    </span>
                  </div>
                  <Link
                    href={`/notes/${note.id}`}
                    className="bg-dark-moss-green text-white px-3 py-1 rounded-md text-sm hover:bg-opacity-90 transition-colors"
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}