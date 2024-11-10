
const Skills = () => {
    const skills = [
        { name: 'React', image: 'https://i.ibb.co.com/H4ZyxTC/React1.png', description: 'Building dynamic UIs.' },
        { name: 'Node.js', image: 'https://i.ibb.co.com/KVDLhVp/Node.png', description: 'Backend development.' },
        { name: 'Express JS', image: 'https://i.ibb.co.com/CbX9W1D/express.png', description: 'Backend development.' },
        { name: 'MongoDB', image: 'https://i.ibb.co.com/b5ZLHFs/mongoDb.png', description: 'Database management.' },
        { name: 'Magento 2', image: 'https://i.ibb.co.com/B3wZFSJ/magento2.webp', description: 'e-Commerce Solution.' },
        { name: 'Javascript', image: 'https://i.ibb.co.com/VpgPk7Z/JS.png', description: 'Interactive by handling events and updating content dynamically.' },
        { name: 'HTML', image: 'https://i.ibb.co.com/k0zWsNq/html.png', description: 'Building UIs.' },
        { name: 'CSS', image: 'https://i.ibb.co.com/X4cFf8K/css.png', description: 'Building UI design.' },
        { name: 'GitHub', image: 'https://i.ibb.co.com/zQGBy1n/github.png', description: 'Code hosting and collaboration.' },
        { name: 'C and C++', image: 'https://i.ibb.co.com/VCmS5Lp/c.png', description: 'Problem Solving.' },
        // Add more skills as needed
    ];
    return (
        <section id="skills" className="py-16 bg-[url('https://i.ibb.co.com/LNFkMtq/banner-bacgground.jpg')] bg-cover">
            <div className="text-center mb-10">
                {/* bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 */}
                <h2 className="text-4xl font-bold text-center text-gray-800">Skills</h2>
                <p className="text-gray-600">Technologies and tools I work with</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition hover:scale-105">
                        <img src={skill.image} alt={skill.name} className="w-16 h-16 object-contain mb-4" />
                        <h3 className="text-xl font-semibold">{skill.name}</h3>
                        <p className="text-gray-600 mt-2">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;