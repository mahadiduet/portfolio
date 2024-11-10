
const Navbar = () => {
    return (
        <div className="navbar bg-[#FFF8F3] text-black">
            <div className="flex-1">
                <a className="btn btn-ghost text-5xl">Emam Mahadi</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-2xl">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;