import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Contact = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        phone: '', // Added for Laravel validation
        email: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // POST request to Laravel API
            const response = await axios.post('http://127.0.0.1:8000/api/contact', formData);

            if (response.data.success) {
                // Show success message
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: response.data.message,
                    confirmButtonColor: '#006a4e'
                });

                // Clear form fields
                setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
            }
        } catch (error) {
            console.error("Contact Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to send message. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            {/* Header Section */}
            <header className="page-header d-flex align-items-center" style={{ background: "linear-gradient(rgba(0, 106, 78, 0.85), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover", height: "300px" }}>
                <div className="container text-center text-white">
                    <h1 className="display-4 fw-bold" data-lang="contact_header_title">Contact Us</h1>
                    <p className="lead mx-auto" style={{ maxWidth: "600px" }} data-lang="contact_header_sub">Have questions or want to get involved? We would love to hear from you.</p>
                </div>
            </header>

            {/* Contact Info & Form Section */}
            <section className="py-5 bg-light-alt theme-bg-alt">
                <div className="container py-4">
                    <div className="row g-5">
                        
                        {/* Contact Information Cards */}
                        <div className="col-lg-5">
                            <h2 className="fw-bold theme-text mb-4" data-lang="contact_info_title">Get in Touch</h2>
                            <p className="theme-text-muted mb-5" data-lang="contact_info_desc">Whether you want to donate, volunteer, or partner with us, feel free to drop a message or visit our office.</p>
                            
                            <div className="contact-info-card d-flex align-items-center mb-4 p-3 rounded-3 theme-card shadow-sm border-0">
                                <div className="icon-wrapper bg-light text-primary-custom rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px", fontSize: "20px" }}>
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold theme-text mb-1" data-lang="contact_office">Office Address</h5>
                                    <p className="theme-text-muted mb-0">Dhaka, Bangladesh</p>
                                </div>
                            </div>

                            <div className="contact-info-card d-flex align-items-center mb-4 p-3 rounded-3 theme-card shadow-sm border-0">
                                <div className="icon-wrapper bg-light text-primary-custom rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px", fontSize: "20px" }}>
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold theme-text mb-1" data-lang="contact_phone">Phone Number</h5>
                                    <p className="theme-text-muted mb-0">+880 1818861685</p>
                                </div>
                            </div>

                            <div className="contact-info-card d-flex align-items-center mb-4 p-3 rounded-3 theme-card shadow-sm border-0">
                                <div className="icon-wrapper bg-light text-primary-custom rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px", fontSize: "20px" }}>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold theme-text mb-1" data-lang="contact_email">Email Address</h5>
                                    <p className="theme-text-muted mb-0">info@annaswelfare.org</p>
                                </div>
                            </div>

                            <h5 className="fw-bold theme-text mt-5 mb-3" data-lang="contact_social">Follow Us</h5>
                            <div className="d-flex gap-3">
                                <a href="#" className="social-icon-btn"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="social-icon-btn"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#" className="social-icon-btn"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#" className="social-icon-btn"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-7">
                            <div className="card theme-card border-0 shadow-lg p-4 p-md-5 rounded-4 h-100">
                                <h3 className="fw-bold theme-text mb-4" data-lang="contact_form_title">Send Us a Message</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control theme-input py-3" required placeholder="Your Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control theme-input py-3" required placeholder="Your Phone Number" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control theme-input py-3" required placeholder="Your Email" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="form-control theme-input py-3" required placeholder="Subject" />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea name="message" value={formData.message} onChange={handleChange} className="form-control theme-input py-3" rows="5" required placeholder="Write your message here..."></textarea>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <button type="submit" className="btn btn-primary-custom w-100 py-3 fs-5 fw-bold" disabled={loading}>
                                                {loading ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Google Map Section */}
            <section className="map-section">
                <iframe src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450" style={{ border: 0, marginBottom: "-10px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
            
        </main>
    );
};

export default Contact;