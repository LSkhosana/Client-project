import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../CSS/Navbar.css";
import logo from '../Assets/HDlogo.png'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img id='logo'src={logo} alt='logo'/>
			<nav ref={navRef}>
				<div className="close">
                <div className="links">
				<a href="/">Home</a>
				<a href="/#h5">About</a>
				<a href="/#serv">Sevices</a>
				<a href="/contact">Contact</a>
                </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				</div>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
      <button className="add-btn">
        <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
        Free Quote
        </Link>
</button>


		</header>
	);
}

export default Navbar;
