import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-16 bg-[url('https://i.ibb.co.com/LNFkMtq/banner-bacgground.jpg')] bg-cover" id="contact">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-8">
          I'd love to connect! Feel free to reach out through the form or on social media.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Contact Form */}
          <form className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
          </form>

          {/* Contact Info and Social Icons */}
          <div className="text-center md:text-left space-y-4 bg-blue-600 px-8 py-20 rounded-xl text-white shadow-lg">
            <p className="text-white">Email: mahadiduet@gmail.com</p>
            <p className="text-white">Phone: +8801723687721</p>
            <p className="text-white">Location: Dhaka, Bangladesh</p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="https://www.facebook.com/mahadiduet" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition">
                <button className="bg-black p-2 rounded-full"><FaFacebookF size={24} /></button>
              </a>
              <a href="https://github.com/mahadiduet" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-900 transition">
              <button className="bg-black p-2 rounded-full"><FaGithub size={24} /></button>
              </a>
              <a href="https://www.linkedin.com/in/mahadiduet" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition">
              <button className="bg-black p-2 rounded-full"><FaLinkedinIn size={24} /></button>
              </a>
              <a href="https://x.com/emammahadi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition">
              <button className="bg-black p-2 rounded-full"><FaXTwitter size={24} /></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
