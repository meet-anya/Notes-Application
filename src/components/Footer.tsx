import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-pakistan-green text-cornsilk py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Anya Notes</h2>
            <p className="text-sm opacity-75">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms" className="text-sm hover:text-earth-yellow transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm hover:text-earth-yellow transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm hover:text-earth-yellow transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}