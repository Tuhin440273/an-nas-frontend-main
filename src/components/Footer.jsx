import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png';

const Footer = () => {
    return (
        
        <footer className="footer py-5 text-white">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <Link to="/" className="d-flex align-items-center text-decoration-none mb-4">
                            <img className="nav-logo" src={logo} alt="Logo" title="AN-NAS Welfare Foundation" />
                            <div className="d-flex flex-column justify-content-center">
                            </div>
                        </Link>

                        <p className="text-light" data-lang="footer_desc">Committed to creating sustainable social impact and
                            spreading kindness, humanity, and support to make a better future for everyone.</p>
                        <h5 className="fw-bold theme-text mt-5 mb-3" data-lang="contact_social">Follow Us</h5>
                        <div className="d-flex gap-3">
                            <a href="#" className="social-icon-btn"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="social-icon-btn"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className="social-icon-btn"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="social-icon-btn"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="fw-bold mb-3" data-lang="footer_quick_links">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/about" data-lang="nav_about">About Us</Link></li>
                            <li><Link to="/projects" data-lang="nav_projects">Our Projects</Link></li>
                            <li><Link to="/donation" data-lang="nav_donate">Donate</Link></li>
                            <li><Link to="/contact" data-lang="nav_contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="fw-bold mb-3" data-lang="footer_contact_info">Contact Info</h5>
                        <p style={{ opacity: 0.8 }}><i className="fa-solid fa-location-dot me-2"></i> <span
                            data-lang="footer_address"> kha-12/2,(3rd Floor), progoti Soroni, Shajadpur,
                            Gulshan,Dhaka-1212, Bangladesh</span></p>

                        <p style={{ opacity: 0.8 }}><i className="fa-solid fa-phone me-2"></i> <span
                            data-lang="footer_phone_1">+880 1818861685</span></p>
                        <p style={{ opacity: 0.8 }}><i className="fa-solid fa-phone me-2"></i> <span
                            data-lang="footer_phone_2">+880 1714962854</span></p>
                        <p style={{ opacity: 0.8 }}><i className="fa-solid fa-phone me-2"></i> <span
                            data-lang="footer_phone_3">+880 1813205962</span></p>

                        <p style={{ opacity: 0.8 }}><i className="fa-solid fa-envelope me-2"></i> <span
                            data-lang="footer_email">info@annaswelfare.org</span></p>
                    </div>
                </div>
                <hr className="mt-4 mb-3 border-secondary" />
                <div className="text-center">
                    <p className="mb-0" data-lang="footer_copyright">&copy; 2026 AN-NAS Welfare Foundation. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;