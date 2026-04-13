import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInbox,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";



const Footer = () => {

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 dark:text-white">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Hubungi saya
            </h1>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/igorolan?igsh=bG03NnlzdGJmZGpo">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://www.facebook.com/share/1BCc6Y4yi3/">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/igor-hasiholan-43643a339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="olangan4238q@gmail.com">
                <FaEnvelope className="text-3xl" />
              </a>
              <a href="https://discord.gg/ArDwKCGW">
                <FaDiscord className="text-3xl" />
              </a>
              <a href="https://github.com/Igor-olan">
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50 dark:text-white">
            @copyright 2025 All rights reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
