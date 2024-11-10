const ExperienceEducation = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-16 bg-[url('https://i.ibb.co.com/LNFkMtq/banner-bacgground.jpg')] bg-cover" id="experience-education">
      <div className="container mx-auto px-12">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience & Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Education</h3>
            <div className="space-y-8">
              {/* Education Item */}
              <div className="relative group">
                <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-600 rounded-full transition-all duration-300 group-hover:bg-blue-800"></div>
                <div className="border-l-2 border-blue-600 pl-6 ml-4 transition-all duration-300 group-hover:border-blue-800">
                  <h4 className="text-xl font-medium text-gray-800 group-hover:text-blue-800">Bachelor's in Computer Science</h4>
                  <p className="text-gray-600">DUET, 2011 - 2015</p>
                </div>
              </div>

              {/* Additional Education Items */}
              <div className="relative group">
                <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-600 rounded-full transition-all duration-300 group-hover:bg-blue-800"></div>
                <div className="border-l-2 border-blue-600 pl-6 ml-4 transition-all duration-300 group-hover:border-blue-800">
                  <h4 className="text-xl font-medium text-gray-800 group-hover:text-blue-800">Diploma-in-Engineering</h4>
                  <p className="text-gray-600">Tangail Polytechnic Institute, 2005 - 2009</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Experience</h3>
            <div className="space-y-8">
              {/* Experience Item */}
              <div className="relative group">
                <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-600 rounded-full transition-all duration-300 group-hover:bg-blue-800"></div>
                <div className="border-l-2 border-blue-600 pl-6 ml-4 transition-all duration-300 group-hover:border-blue-800">
                  <h4 className="text-xl font-medium text-gray-800 group-hover:text-blue-800">Web Developer</h4>
                  <p className="text-gray-600">Zero Gravity Venture Limited, 2018 - Present</p>
                  <p className="text-gray-500">Responsibilities: Developed and maintained web applications and e-Commerce site.</p>
                </div>
              </div>

              {/* Additional Experience Items */}
              <div className="relative group">
                <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-600 rounded-full transition-all duration-300 group-hover:bg-blue-800"></div>
                <div className="border-l-2 border-blue-600 pl-6 ml-4 transition-all duration-300 group-hover:border-blue-800">
                  <h4 className="text-xl font-medium text-gray-800 group-hover:text-blue-800">Junior Web Developer</h4>
                  <p className="text-gray-600">Cybernetikz, 2016 - 2017</p>
                  <p className="text-gray-500">Responsibilities: Assisted in frontend and backend development and bug fixing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;