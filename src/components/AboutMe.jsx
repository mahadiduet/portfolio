
const AboutMe = () => {
    return (
        <section id="about" className="py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-800">
            <div className="flex justify-between">
                <div className="w-1/2">
                    <img
                        src="https://i.ibb.co.com/C2BCrtg/Image-2.jpg"
                        alt="Emam Mahadi"
                        className="w-full lg:w-[500px] h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>
                <div className="w-1/2 mx-auto text-center space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
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
        </section>
    );
};

export default AboutMe;