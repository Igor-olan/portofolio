import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Title */}
        <h2 className="text-2xl font-bold mb-8">
          Hubungi Saya
        </h2>

        {/* Social List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/igorolan?igsh=bG03NnlzdGJmZGpo"
            target="_blank"
            className="flex items-center gap-3 hover:text-pink-500 transition"
          >
            <FaInstagram className="text-3xl" />
            <span className="text-base">Instagram</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1BCc6Y4yi3/"
            target="_blank"
            className="flex items-center gap-3 hover:text-blue-600 transition"
          >
            <FaFacebook className="text-3xl" />
            <span className="text-base">Facebook</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/igor-hasiholan-43643a339"
            target="_blank"
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-3xl" />
            <span className="text-base">LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href="mailto:olangan4238q@gmail.com"
            className="flex items-center gap-3 hover:text-red-400 transition"
          >
            <FaEnvelope className="text-3xl" />
            <span className="text-base">Email</span>
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/ArDwKCGW"
            target="_blank"
            className="flex items-center gap-3 hover:text-indigo-400 transition"
          >
            <FaDiscord className="text-3xl" />
            <span className="text-base">Discord</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Igor-olan"
            target="_blank"
            className="flex items-center gap-3 hover:text-gray-500 transition"
          >
            <FaGithub className="text-3xl" />
            <span className="text-base">GitHub</span>
          </a>

        </div>

        {/* Bottom text */}
        <div className="text-center mt-12 border-t border-gray-300/40 pt-6 text-sm">
          © 2026 Igor. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;