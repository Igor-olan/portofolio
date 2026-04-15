import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 dark:text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Kiri - Brand */}
        <Link to="/" className="text-2xl font-bold">
          Igor
        </Link>

        {/* Kanan - Menu */}
        <div className="flex items-center gap-6">
          <Link to="/#projects" className="text-lg hover:text-blue-500 transition">
            Projects
          </Link>
          <Link to="/#contact" className="text-lg hover:text-blue-500 transition">
            Contact
          </Link>
          <DarkMode />
        </div>

      </div>
    </div>
  );
};

export default Navbar;