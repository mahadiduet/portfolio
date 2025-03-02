const AboutMe = () => {
    return (
      <section id="about" className="py-16  text-red-400 bg-[url('https://i.ibb.co.com/LNFkMtq/banner-bacgground.jpg')] bg-cover">
        <div className="container mx-auto px-4">
          <div className="flex gap-8 flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="https://i.ibb.co.com/C2BCrtg/Image-2.jpg"
                alt="Emam Mahadi"
                className="w-full h-auto rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
  
            {/* About Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">About Me</h2>
              <p className="text-lg text-blue-800 leading-relaxed mb-4">
                Hello! I'm Md. Emam Mahadi, a dedicated full-stack developer with expertise in both front-end and back-end technologies.
                I specialize in building dynamic, user-focused applications using <span className="font-semibold text-gray-900">React</span>,
                <span className="font-semibold text-gray-900"> Node.js</span>, and <span className="font-semibold text-gray-900">MongoDB</span>.
                My experience spans a wide array of skills, including front-end frameworks like
                <span className="font-semibold text-gray-900"> Tailwind CSS</span>, <span className="font-semibold text-gray-900">Daisy UI</span>,
                <span className="font-semibold text-gray-900"> HTML/CSS</span>, along with back-end databases like
                <span className="font-semibold text-gray-900"> MySQL</span> and <span className="font-semibold text-gray-900">MongoDB</span>, ensuring scalable and efficient web solutions.
                I’m also experienced in <span className="font-semibold text-gray-900">Magento 2</span> for developing robust e-commerce platforms.
                Passionate about clean code and intuitive design, I aim to craft digital experiences that deliver both functionality and style.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  