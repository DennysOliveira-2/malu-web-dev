import { Link } from "react-router-dom";
import './styles.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="link-nav">HOME</Link>
            <Link to="/press" className="link-nav">PRESS INITIALIZER</Link>
        </nav>
    )
}