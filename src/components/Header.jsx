import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png';

const Header = () => {
    // মোবাইল মেনু অটোমেটিক ক্লোজ করার ফাংশন
    const closeMobileMenu = () => {
        const navbarCollapse = document.getElementById('navbarNav');
        // যদি মেনুটি ওপেন থাকে ('show' ক্লাস থাকে), তাহলে এটি বন্ধ করে দেবে (বুটস্ট্র্যাপের ক্লাস রিমুভ করে)
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
            <div className="container">
                {/* Logo and Brand */}
                <Link className="navbar-brand custom-brand align-items-center" to="/" onClick={closeMobileMenu}>
                    <img className="nav-logo" src={logo} alt="Logo" title="AN-NAS Welfare Foundation" />
                    <div className="brand-text-container d-flex flex-column justify-content-center">
                        
                    </div>
                </Link>

                {/* Mobile Toggle Button */}
                <button className="navbar-toggler text-white border-0 shadow-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav">
                    <i className="fa-solid fa-bars fa-lg text-white"></i>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeMobileMenu} data-lang="nav_home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={closeMobileMenu} data-lang="nav_about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/activities" onClick={closeMobileMenu} data-lang="nav_projects">Activities</Link>
                        </li>

                        {/* Media Dropdown */}
                        <li className="nav-item dropdown custom-dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="mediaDropdown" data-bs-toggle="dropdown"
                                aria-expanded="false" data-lang="nav_media">Media</a>
                            <ul className="dropdown-menu border-0 shadow-lg rounded-3">
                                <li>
                                    <Link className="dropdown-item py-2" to="/gallery" onClick={closeMobileMenu} data-lang="nav_gallery">
                                        <i className="fa-regular fa-image me-2 text-secondary-custom"></i> Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" to="/news" onClick={closeMobileMenu} data-lang="nav_loink">
                                        <i className="fa-regular fa-newspaper text-secondary-custom me-2"></i> News & Blog
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Get Involved Dropdown */}
                        <li className="nav-item dropdown custom-dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="involvedDropdown" data-bs-toggle="dropdown"
                                aria-expanded="false" data-lang="nav_get_involved">Get Involved</a>
                            <ul className="dropdown-menu border-0 shadow-lg rounded-3">
                                <li>
                                    <Link className="dropdown-item py-2" to="/volunteer" onClick={closeMobileMenu} data-lang="nav_volunteer">
                                        <i className="fa-solid fa-hand-holding-heart me-2 text-secondary-custom"></i> Volunteer
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2 fw-bold text-primary-custom" to="/donation" onClick={closeMobileMenu} data-lang="nav_donate">
                                        <i className="fa-solid fa-circle-dollar-to-slot me-2"></i> Donate Now
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={closeMobileMenu} data-lang="nav_contact">Contact</Link>
                        </li>
                    </ul>

                    {/* Right Side Buttons (Theme, Lang, Donate) */}
                    <div className="d-flex align-items-center ms-lg-3 gap-2 mt-3 mt-lg-0 pb-3 pb-lg-0">
                        <button id="theme-toggle" className="btn btn-outline-light rounded-circle"
                            title="Toggle Dark/Light Mode" onClick={closeMobileMenu}>
                            <i className="fa-solid fa-moon"></i>
                        </button>
                        <button id="lang-toggle" className="btn btn-outline-light fw-bold" onClick={closeMobileMenu}>বাংলা</button>
                        <Link className="btn btn-donate" to="/donation" onClick={closeMobileMenu} data-lang="nav_donate">Donate Now</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;