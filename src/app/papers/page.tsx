import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// Dummy data for demonstration purposes
const papersData = [
  {
    id: 1,
    title: "Computer Networks Mid-Term Exam",
    subject: "Computer Science",
    courseCode: "CS304",
    semester: "Fall 2024",
    examDate: "2024-10-15",
    uploadDate: "2025-01-10",
    fileType: "PDF",
    pages: 8,
    views: 412,
    downloads: 237,
    examType: "Mid-Term",
  },
  {
    id: 2,
    title: "Advanced Physics Final Exam",
    subject: "Physics",
    courseCode: "PHY401",
    semester: "Spring 2024",
    examDate: "2024-05-22",
    uploadDate: "2024-06-15",
    fileType: "PDF",
    pages: 12,
    views: 356,
    downloads: 210,
    examType: "Final",
  },
  {
    id: 3,
    title: "Organic Chemistry Quiz",
    subject: "Chemistry",
    courseCode: "CHEM220",
    semester: "Spring 2025",
    examDate: "2025-03-10",
    uploadDate: "2025-03-15",
    fileType: "PDF",
    pages: 4,
    views: 189,
    downloads: 102,
    examType: "Quiz",
  },
  {
    id: 4,
    title: "Calculus II Final Exam",
    subject: "Mathematics",
    courseCode: "MATH202",
    semester: "Fall 2024",
    examDate: "2024-12-18",
    uploadDate: "2025-01-05",
    fileType: "PDF",
    pages: 10,
    views: 378,
    downloads: 198,
    examType: "Final",
  },
  {
    id: 5,
    title: "Introduction to Psychology Quiz",
    subject: "Psychology",
    courseCode: "PSY101",
    semester: "Spring 2025",
    examDate: "2025-02-28",
    uploadDate: "2025-03-05",
    fileType: "PDF",
    pages: 6,
    views: 245,
    downloads: 134,
    examType: "Quiz",
  },
  {
    id: 6,
    title: "Data Structures Mid-Term Exam",
    subject: "Computer Science",
    courseCode: "CS202",
    semester: "Spring 2025",
    examDate: "2025-03-15",
    uploadDate: "2025-03-25",
    fileType: "PDF",
    pages: 7,
    views: 287,
    downloads: 178,
    examType: "Mid-Term",
  },
];

export default function Papers() {
  return (
    <div className="min-h-screen flex flex-col bg-cornsilk">
      <Navbar />

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">          <div>
            <h1 className="text-3xl font-bold text-pakistan-green mb-2">Question Papers</h1>
            <p className="text-black font-medium">Practice with previous exam papers shared by your college community</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <div className="relative">              <input
                type="text"
                placeholder="Search papers..."
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
              <option value="">All Exam Types</option>
              <option value="mid-term">Mid-Term</option>
              <option value="final">Final</option>
              <option value="quiz">Quiz</option>
              <option value="assignment">Assignment</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papersData.map((paper) => (
            <div
              key={paper.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-tigers-eye p-4">
                <div className="flex justify-between items-center">
                  <span className="bg-pakistan-green text-cornsilk text-xs font-bold px-2 py-1 rounded">
                    {paper.subject}
                  </span>
                  <span className="bg-earth-yellow text-pakistan-green text-xs font-bold px-2 py-1 rounded">
                    {paper.examType}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-pakistan-green mb-2">
                  {paper.title}
                </h3>
                <div className="text-sm text-black mb-4">
                  <p>Course: {paper.courseCode}</p>
                  <p>Semester: {paper.semester}</p>
                </div>
                <div className="flex justify-between items-center text-xs text-black mb-4">
                  <span>Exam Date: {new Date(paper.examDate).toLocaleDateString()}</span>
                  <span>{paper.pages} pages</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-tigers-eye mr-1"
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
                      {paper.views}
                    </span>
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-tigers-eye mr-1"
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
                      {paper.downloads}
                    </span>
                  </div>
                  <Link
                    href={`/papers/${paper.id}`}
                    className="bg-tigers-eye text-white px-3 py-1 rounded-md text-sm hover:bg-opacity-90 transition-colors"
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