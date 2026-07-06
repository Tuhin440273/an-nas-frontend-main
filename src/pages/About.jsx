import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const About = () => {
    const [activeTab, setActiveTab] = useState('service');
    return (
        <main>
            {/* Hero Section */}
            <header className="about-hero-section d-flex align-items-center justify-content-center" style={{ background: "linear-gradient(rgba(0, 106, 78, 0.8), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover", height: "350px" }}>
                <div className="container text-center text-white pb-4">
                    <h1 className="display-4 fw-bold mb-3" data-lang="ab_header_title">About Us</h1>
                    <p className="lead mx-auto" style={{ maxWidth: "600px" }} data-lang="ab_header_sub">Discover our inspiring journey and mission as an NGO, driven to make a positive impact on the world.</p>
                </div>
            </header>

            {/* About Details Section */}
            <section className="py-5 mt-4 theme-bg-alt">
                <div className="container py-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pe-lg-5 mb-5 mb-lg-0">
                            <h2 className="fw-bold mb-4 theme-text">
                                <span className="highlight-underline" data-lang="ab_title">About Us</span>
                            </h2>
                            <h5 className="fw-bold mb-3 theme-text" data-lang="ab_subtitle">Embracing Humanity: A Tale of Warmth and True Support</h5>
                            <p className="theme-text-muted mb-4" data-lang="ab_desc">With a caring heart and open arms, we strive to create a nurturing environment where individuals can find solace, understanding, and the strength to overcome life's challenges. Through genuine connections and unwavering dedication, we aim to make a positive impact, uplifting the spirits of those in need and fostering a sense of belonging within our community.</p>
                            <Link to="/contact" className="btn btn-primary-custom px-4 py-2 fw-bold" data-lang="ab_btn">Contact Us</Link>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Holding Hands" className="img-fluid about-side-img shadow-lg rounded-4" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Banner Section */}
            <section className="py-4 theme-bg" style={{ backgroundColor: "#006a4e" }}>
                <div className="container">
                    <div className="stats-banner shadow-lg p-4 rounded-4 bg-white bg-opacity-10 backdrop-blur">
                        <div className="row text-center g-4">
                            <div className="col-6 col-md-3">
                                <h2 className="fw-bold text-white mb-1">৳50L+</h2>
                                <p className="stats-label mb-0 text-light" data-lang="stat_1">RAISED DONATIONS</p>
                            </div>
                            <div className="col-6 col-md-3">
                                <h2 className="fw-bold text-white mb-1">300K</h2>
                                <p className="stats-label mb-0 text-light" data-lang="stat_2">SAVING ONES</p>
                            </div>
                            <div className="col-6 col-md-3">
                                <h2 className="fw-bold text-white mb-1">1M+</h2>
                                <p className="stats-label mb-0 text-light" data-lang="stat_3">COMMUNITY</p>
                            </div>
                            <div className="col-6 col-md-3">
                                <h2 className="fw-bold text-white mb-1">50K+</h2>
                                <p className="stats-label mb-0 text-light" data-lang="stat_4">TARGET ACHIEVED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Feature Section */}
            <section className="py-5 my-4 theme-bg-alt">
                <div className="container py-4 text-center">
                    <h2 className="fw-bold mb-5 theme-text">
                        <span className="highlight-underline" data-lang="helped_title">Helped till now</span>
                    </h2>
                    
                    <div className="row g-4 text-start">
                        {/* Feature 1 */}
                        <div className="col-md-4">
                            <div className="feature-box theme-card p-4 border-0 shadow-sm rounded-4 h-100 bg-white">
                                <div className="icon-wrapper mb-3 text-success fs-1"><i className="fa-solid fa-handshake-angle"></i></div>
                                <h5 className="fw-bold mb-3 theme-text" data-lang="feat_1_title">Helping humanity</h5>
                                <p className="theme-text-muted" data-lang="feat_1_desc">Through education, healthcare, sustainable development, and emergency relief, we make a positive impact. Join us now</p>
                            </div>
                        </div>
                        {/* Feature 2 (Active) */}
                        <div className="col-md-4">
                            <div className="feature-box active theme-card-active p-4 border-0 shadow-lg rounded-4 h-100 text-white" style={{ backgroundColor: "#006a4e" }}>
                                <div className="icon-wrapper mb-3 text-warning fs-1"><i className="fa-solid fa-seedling"></i></div>
                                <h5 className="fw-bold mb-3 text-white" data-lang="feat_2_title">Love your ecosystem</h5>
                                <p className="text-light" data-lang="feat_2_desc">Through awaking people we're on a mission to inspire love and care for our environment to keep balance nature.</p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="col-md-4">
                            <div className="feature-box theme-card p-4 border-0 shadow-sm rounded-4 h-100 bg-white">
                                <div className="icon-wrapper mb-3 text-success fs-1"><i className="fa-solid fa-users"></i></div>
                                <h5 className="fw-bold mb-3 theme-text" data-lang="feat_3_title">Empowering Communities</h5>
                                <p className="theme-text-muted" data-lang="feat_3_desc">Through strategic partnerships and dedicated volunteers, we've been able to swiftly respond to emergencies, offering shelter, food.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Approvals & Certifications Section (অনুমোদনসমূহ) */}
            <section className="py-5 bg-light-alt theme-bg-alt">
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold theme-text">Approvals & Certifications</h2>
                        <div className="mx-auto mt-2" style={{ height: "3px", width: "80px", backgroundColor: "#006a4e" }}></div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {/* Certificate 1 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-3" style={{ backgroundColor: "#ffffff" }}>
                                <img
                                    src="https://placehold.co/600x400/f8f9fa/a3a3a3?text=Registration+Certificate"
                                    alt="Registration Certificate"
                                    className="card-img-top rounded-3 mb-3"
                                    style={{ height: '220px', objectFit: 'contain', padding: '10px', border: '1px solid #eef2f1' }}
                                />
                                <div className="card-body p-0 d-flex flex-column">
                                    <h5 className="fw-bold theme-text mb-4 mt-2 fs-5">Registration Certificate</h5>
                                    <button className="btn w-100 fw-bold mt-auto" style={{ backgroundColor: '#eefcf5', color: '#006a4e', borderRadius: '8px', padding: '10px 0' }}>
                                        <i className="fa-solid fa-download me-2"></i> Download
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Certificate 2 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-3" style={{ backgroundColor: "#ffffff" }}>
                                <img
                                    src="https://placehold.co/600x400/f8f9fa/a3a3a3?text=ISO+Certificate"
                                    alt="ISO Certificate"
                                    className="card-img-top rounded-3 mb-3"
                                    style={{ height: '220px', objectFit: 'contain', padding: '10px', border: '1px solid #eef2f1' }}
                                />
                                <div className="card-body p-0 d-flex flex-column">
                                    <h5 className="fw-bold theme-text mb-4 mt-2 fs-5">ISO Certification</h5>
                                    <button className="btn w-100 fw-bold mt-auto" style={{ backgroundColor: '#eefcf5', color: '#006a4e', borderRadius: '8px', padding: '10px 0' }}>
                                        <i className="fa-solid fa-download me-2"></i> Download
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Certificate 3 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-3" style={{ backgroundColor: "#ffffff" }}>
                                <img
                                    src="https://placehold.co/600x400/f8f9fa/a3a3a3?text=Skill+Development"
                                    alt="Skill Development Certificate"
                                    className="card-img-top rounded-3 mb-3"
                                    style={{ height: '220px', objectFit: 'contain', padding: '10px', border: '1px solid #eef2f1' }}
                                />
                                <div className="card-body p-0 d-flex flex-column">
                                    <h5 className="fw-bold theme-text mb-4 mt-2 fs-5">Skill Development Affiliation</h5>
                                    <button className="btn w-100 fw-bold mt-auto" style={{ backgroundColor: '#eefcf5', color: '#006a4e', borderRadius: '8px', padding: '10px 0' }}>
                                        <i className="fa-solid fa-download me-2"></i> Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Income-Expenditure Policy Section (আয়-ব্যয়ের নীতিমালা) */}
            <section className="py-5 bg-white">
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold theme-text">Income & Expenditure Policy</h2>
                        <div className="mx-auto mt-2" style={{ height: "3px", width: "80px", backgroundColor: "#006a4e" }}></div>
                    </div>

                    {/* Tab Buttons */}
                    <div className="d-flex justify-content-center flex-wrap gap-2 gap-md-4 mb-4">
                        <button 
                            onClick={() => setActiveTab('income')} 
                            className={`btn rounded-pill px-4 py-2 fw-bold d-flex align-items-center ${activeTab === 'income' ? 'btn-success' : 'btn-outline-success'}`}
                            style={{ transition: "all 0.3s" }}>
                            <i className="fa-solid fa-hand-holding-dollar me-2 fs-5"></i> Sources of Income
                        </button>
                        <button 
                            onClick={() => setActiveTab('service')} 
                            className={`btn rounded-pill px-4 py-2 fw-bold d-flex align-items-center ${activeTab === 'service' ? 'btn-success' : 'btn-outline-success'}`}
                            style={{ transition: "all 0.3s" }}>
                            <i className="fa-solid fa-sack-dollar me-2 fs-5"></i> Service Expenditure
                        </button>
                        <button 
                            onClick={() => setActiveTab('management')} 
                            className={`btn rounded-pill px-4 py-2 fw-bold d-flex align-items-center ${activeTab === 'management' ? 'btn-success' : 'btn-outline-success'}`}
                            style={{ transition: "all 0.3s" }}>
                            <i className="fa-solid fa-users-gear me-2 fs-5"></i> Management Cost
                        </button>
                    </div>

                    {/* Tab Content Box */}
                    <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5" style={{ backgroundColor: "#fcfdfd", border: "1px solid #eef2f1" }}>
                        
                        {/* 1. Sources of Income Content */}
                        {activeTab === 'income' && (
                            <ul className="list-unstyled mb-0 fade-in-animation">
                                <li className="d-flex mb-4">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">General voluntary donations (Sadaqah) from individuals and organizations.</span>
                                </li>
                                <li className="d-flex mb-4">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">Zakat funds collected specifically to be distributed among eligible beneficiaries.</span>
                                </li>
                                <li className="d-flex mb-4">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">Corporate Social Responsibility (CSR) funds provided by partner companies.</span>
                                </li>
                                <li className="d-flex">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">Dedicated funds raised for specific seasonal campaigns (e.g., Qurbani, Winter relief).</span>
                                </li>
                            </ul>
                        )}

                        {/* 2. Service Expenditure Content */}
                        {activeTab === 'service' && (
                            <ul className="list-unstyled mb-0 fade-in-animation">
                                <li className="d-flex mb-4">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">Donations are spent in accordance with Islamic Shariah principles and national laws.</span>
                                </li>
                                <li className="d-flex mb-4">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">Funds are spent strictly in the sector for which they were donated. Funds from one sector are not transferred to another.</span>
                                </li>
                                <li className="d-flex mb-4">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">100% of the Zakat fund is distributed among the rightful beneficiaries. Zakat money is never used for management purposes; general funds are used for that.</span>
                                </li>
                                <li className="d-flex mb-4">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">After the completion of each project, detailed income and expenditure accounts are maintained following international standards.</span>
                                </li>
                                <li className="d-flex mb-4">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">Once a year, the foundation's financial accounts are audited by a Chartered Accountant, and a report is published.</span>
                                </li>
                                <li className="d-flex">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">All financial activities of AN-NAS Foundation are strictly monitored under the supervision of a team comprising expert advisors.</span>
                                </li>
                            </ul>
                        )}

                        {/* 3. Management Cost Content */}
                        {activeTab === 'management' && (
                            <ul className="list-unstyled mb-0 fade-in-animation">
                                <li className="d-flex mb-4">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">Operational and administrative costs are kept to an absolute minimum to maximize beneficiary impact.</span>
                                </li>
                                <li className="d-flex mb-4">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">Staff salaries, office rent, and utility bills are paid exclusively from the general fund (Sadaqah), NEVER from the Zakat fund.</span>
                                </li>
                                <li className="d-flex">
                                    <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                    <span className="theme-text fs-5">Marketing and promotional expenses are optimized and often sponsored by specific well-wishers to save organizational funds.</span>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;