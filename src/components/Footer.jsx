import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import { useTranslation } from 'react-i18next'; // ট্রান্সলেশন ইম্পোর্ট করা হলো

const Footer = () => {
    const { t } = useTranslation(); // হুক কল করা হলো

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

                        <p className="text-light">{t('footer_desc')}</p>
                        <h5 className="fw-bold theme-text mt-5 mb-3">{t('footer_follow_us')}</h5>
                        <div className="d-flex gap-3">
                            <a href="https://www.facebook.com/share/1BoH6pn7P5" className="social-icon-btn"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/company/annas-welfare-foundation" className="social-icon-btn"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#" className="social-icon-btn"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className="social-icon-btn"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="social-icon-btn"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4">
                        <h5 className="fw-bold mb-3">{t('footer_quick_links')}</h5>
                        <ul className="list-unstyled footer-links">
                            {/* ন্যাভবারের ট্রান্সলেশনগুলোই এখানে পুনরায় ব্যবহার করা হয়েছে */}
                            <li><Link to="/about">{t('nav_about')}</Link></li>
                            <li><Link to="/activities">{t('nav_activities')}</Link></li>
                            <li><Link to="/donation">{t('nav_donate')}</Link></li>
                            <li><Link to="/contact">{t('nav_contact')}</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-4">
                        <h5 className="fw-bold mb-3">{t('footer_contact_info')}</h5>
                        <p style={{ opacity: 0.8 }}>
                            <i className="fa-solid fa-location-dot me-2"></i> 
                            <span>{t('footer_address')}</span>
                        </p>

                        <p style={{ opacity: 0.8 }}><i className="fa-solid fa-phone me-2"></i> <span>+880 1713990042</span></p>
                        <p style={{ opacity: 0.8 }}><i className="fa-solid fa-phone me-2"></i> <span>+880 1818861685</span></p>
                        <p style={{ opacity: 0.8 }}><i className="fa-solid fa-phone me-2"></i> <span>+880 1714962854</span></p>
                        <p style={{ opacity: 0.8 }}><i className="fa-solid fa-phone me-2"></i> <span>+880 1813205962</span></p>

                        <p style={{ opacity: 0.8 }}>
                            <i className="fa-solid fa-envelope me-2"></i> 
                            <span>info.annaswelfarefoundation@gmail.com</span>
                        </p>
                    </div>
                </div>
                <hr className="mt-4 mb-3 border-secondary" />
                <div className="text-center">
                    <p className="mb-0">{t('footer_copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;