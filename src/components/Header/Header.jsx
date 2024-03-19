import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex items-center w-full justify-center bg-cyan-400 px-4 py-6 text-center">
            <nav className="flex gap-8">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;