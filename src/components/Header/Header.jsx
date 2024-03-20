import { Link, NavLink } from "react-router-dom";
import './Header.css';


const Header = () => {
    return (
        <div className="flex items-center w-full justify-center bg-cyan-400 px-4 py-6 text-center">
            <nav className="flex gap-8">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="/contact">Contact</Link>
                <NavLink to="/users">user</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;