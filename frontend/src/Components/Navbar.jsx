import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../CSS/Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<nav ref={navRef}>
                <div className="links">
				<a href="/#">Home</a>
				<a href="/#">About</a>
				<a href="/#">Sevices</a>
				<a href="/#">Contact</a>
                </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
      <button className="add-btn">
        <Link to="/add" style={{ textDecoration: 'none', color: 'inherit' }}>
        Free Qoute
        </Link>
</button>


		</header>
	);
}

export default Navbar;
