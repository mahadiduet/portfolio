import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between bg-[#FFF8F3] p-8 space-y-8 sm:space-y-0 mt-16">
      <div className="banner-content flex-1 space-y-4">
        <h4 className="text-4xl font-semibold text-gray-700">Hi, I am</h4>
        <h1 className="text-5xl sm:text-6xl font-bold text-blue-900">Emam Mahadi</h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          A passionate full-stack developer skilled in React, Node.js, Express, and MongoDB, creating efficient and impactful web applications.
        </p>
        <div className="flex flex-col items-center sm:flex-row justify-start sm:justify-start gap-4 mt-4">
          <a target="_blank" download="Resume.pdf" href="https://drive.google.com/file/d/1TFe0sdA7KGMTQYxYM1i2u__VzOFdnjbH/view?usp=drive_link">
            <button className="bg-blue-500 text-white rounded px-8 py-4 font-medium transition hover:bg-orange-600">
              Download Resume
            </button>
          </a>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="https://www.facebook.com/mahadiduet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="https://github.com/mahadiduet" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mahadiduet" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://x.com/emammahadi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition">
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <img
        className="w-80 sm:w-[350px] md:w-[450px] lg:w-[500px] rounded-lg shadow-lg mx-auto sm:mx-0"
        src="https://i.ibb.co.com/hgm1pJw/Image-8.jpg"
        alt="Emam Mahadi"
      />
    </div>
  );
};

export default Banner;