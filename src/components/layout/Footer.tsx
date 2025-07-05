import { BookCopy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <BookCopy /> BookBuddy
          </h2>
          <p className=" text-sm">Unlocking Worlds Of Knowledge</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-indigo-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/books" className="hover:text-indigo-400 transition">
                All Books
              </a>
            </li>
            <li>
              <a
                href="/create-book"
                className="hover:text-indigo-400 transition"
              >
                Create Book
              </a>
            </li>
            <li>
              <a
                href="/borrow-summary"
                className="hover:text-indigo-400 transition"
              >
                Borrow Summary
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">Email: support@bookbuddy.com</p>
          <p className="text-sm">Phone: +880 1763955 074</p>
          <p className="text-sm">Address: Sylhet, Bangladesh</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} BookBuddy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
