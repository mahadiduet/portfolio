
const Banner = () => {
    return (
        <div className="flex justify-between bg-[#FFF8F3] p-8">
            <div className="banner-content space-y-4">
                <h4 className="text-4xl font-semibold text-gray-700">Hi, I am</h4>
                <h1 className="text-6xl font-bold text-gray-900">Emam Mahadi</h1>
                <p className="text-lg text-gray-500 leading-relaxed">
                    A passionate full-stack developer skilled in React, Node.js, Express, and MongoDB, creating efficient and impactful web applications.
                </p>
                <div className="space-x-4">
                    <button className="bg-orange-500 text-white rounded px-8 py-4 font-medium transition hover:bg-orange-600">
                        Download CV
                    </button>
                </div>
            </div>
            <img
                className="w-80 lg:w-[500px] rounded-lg shadow-lg"
                src="https://i.ibb.co.com/hgm1pJw/Image-8.jpg"
                alt="Emam Mahadi"
            />
        </div>
    );
};

export default Banner;