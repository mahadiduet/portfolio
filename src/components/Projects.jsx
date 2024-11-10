const Projects = () => {
    const projects = [
        { name: 'Podcastify', image: 'https://i.ibb.co.com/nsVLw9R/13.webp', description: 'Podcastify is a platform that enables users to create, distribute, and discover podcasts across various topics and genres. It provides tools for recording, editing, and publishing audio content, making it easy for podcasters to reach their audiences and for listeners to find engaging shows.', urlLive: 'https://podcastify-598b9.web.app' },
        { name: 'Tourism', image: 'https://i.ibb.co.com/N232NKv/11.png', description: 'Tourism is the act of traveling to and exploring destinations for leisure, cultural experiences, adventure, or relaxation. It connects people with new environments, cultures, and traditions, contributing to personal growth and the global economy.', urlLive: 'https://tourism-management-54a7c.web.app' },
        { name: 'Matrimony', image: 'https://i.ibb.co.com/5F3fQnb/12.png', description: 'A matrimony website is an online platform that helps individuals find suitable marriage partners based on their preferences, backgrounds, and interests. It connects people through profiles, matching algorithms, and communication tools to facilitate compatible matches.', urlLive: 'https://matrimony-859d8.web.app' },
        // Add other projects
    ];
    return (
        <section id="projects" className="py-16 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-center text-gray-800">My Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {projects.map((project, index) => (
                    <div key={index}>
                        <h2 className="text-center text-xl font-bold">{project.name}</h2>
                        <div className="relative group">
                            <img src={project.image} alt={project.name} className="rounded-lg shadow-md w-full h-60 object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-center p-4 rounded-lg">
                                <div>
                                    <h3 className="text-2xl font-semibold">{project.name}</h3>
                                    <p className="mt-2">{project.description}</p>
                                </div>
                            </div>
                        </div>
                        <a className="flex justify-center mt-4" href={project.urlLive} target="_blank"><button className="bg-blue-400 px-16 py-2 rounded-lg text-white font-bold">Live Visit</button></a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;