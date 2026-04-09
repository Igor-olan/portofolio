import DarkMode from "./DarkMode";
// import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";



const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-1 justify-end w-full gap-4">
              <div>
                <DarkMode />
              </div>
              <div className="flex items-center flex-1 justify-end w-full gap-4">
                <a href="https://www.instagram.com/igorolan?igsh=bG03NnlzdGJmZGpo">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com/share/1BCc6Y4yi3/">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/igor-hasiholan-43643a339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="https://github.com/Igor-olan">
                  <FaGithub className="text-3xl" />
                </a>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
