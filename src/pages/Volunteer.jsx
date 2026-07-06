import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Volunteer = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        reason: ''
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
            // Sending POST request to Laravel API
            // Note: Make sure you have a '/api/volunteer' route in your Laravel backend
            const response = await axios.post('http://127.0.0.1:8000/api/volunteer', formData);

            if (response.data.success) {
                // Show success message
                Swal.fire({
                    icon: 'success',
                    title: 'Application Submitted!',
                    text: response.data.message || 'Thank you for your interest in volunteering with us.',
                    confirmButtonColor: '#006a4e'
                });

                // Clear form fields
                setFormData({ name: '', phone: '', email: '', address: '', reason: '' });
            }
        } catch (error) {
            console.error("Volunteer Form Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            {/* Header Section */}
            <header className="page-header d-flex align-items-center" style={{ background: "linear-gradient(rgba(0, 106, 78, 0.85), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover", height: "300px" }}>
                <div className="container text-center text-white">
                    <h1 className="display-4 fw-bold" data-lang="vol_header_title">Become a Volunteer</h1>
                    <p className="lead mx-auto" style={{ maxWidth: "600px" }} data-lang="vol_header_sub">Join our dedicated team and make a real difference in the lives of the underprivileged.</p>
                </div>
            </header>

            {/* Volunteer Info & Form Section */}
            <section className="py-5 bg-light-alt theme-bg-alt">
                <div className="container py-4">
                    <div className="row g-5 align-items-center">
                        
                        {/* Why Volunteer With Us Info */}
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <h2 className="fw-bold theme-text mb-4" data-lang="vol_info_title">Why Volunteer With Us?</h2>
                            <p className="theme-text-muted mb-4" data-lang="vol_info_desc1">Volunteering is not just about giving your time; it's about giving your heart. When you join AN-NAS Welfare Foundation, you become part of a family that works tirelessly to bring smiles to those who have forgotten how to smile.</p>
                            
                            <ul className="list-unstyled volunteer-benefits theme-text mt-4">
                                <li className="mb-3 d-flex align-items-start">
                                    <i className="fa-solid fa-circle-check text-success fs-4 me-3 mt-1"></i>
                                    <div>
                                        <h5 className="fw-bold mb-1" data-lang="vol_benefit_1_title">Impact Lives</h5>
                                        <p className="text-muted theme-text-muted mb-0" data-lang="vol_benefit_1_desc">Directly contribute to projects that provide education, food, and medical help.</p>
                                    </div>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <i className="fa-solid fa-circle-check text-success fs-4 me-3 mt-1"></i>
                                    <div>
                                        <h5 className="fw-bold mb-1" data-lang="vol_benefit_2_title">Learn & Grow</h5>
                                        <p className="text-muted theme-text-muted mb-0" data-lang="vol_benefit_2_desc">Develop leadership skills, teamwork, and gain valuable experience.</p>
                                    </div>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <i className="fa-solid fa-circle-check text-success fs-4 me-3 mt-1"></i>
                                    <div>
                                        <h5 className="fw-bold mb-1" data-lang="vol_benefit_3_title">Build a Network</h5>
                                        <p className="text-muted theme-text-muted mb-0" data-lang="vol_benefit_3_desc">Meet like-minded people who share your passion for social work.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Volunteer Form */}
                        <div className="col-lg-7">
                            <div className="card theme-card border-0 shadow-lg p-4 p-md-5 rounded-4 h-100">
                                <h3 className="fw-bold theme-text mb-4 text-center" data-lang="vol_form_title">Join Our Team</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label theme-text fw-semibold">Full Name *</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control theme-input py-2" required placeholder="John Doe" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label theme-text fw-semibold">Phone Number *</label>
                                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control theme-input py-2" required placeholder="01XXXXXXXXX" />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label theme-text fw-semibold">Email Address</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control theme-input py-2" placeholder="example@mail.com" />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label theme-text fw-semibold">Current Address *</label>
                                            <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control theme-input py-2" required placeholder="Dhaka, Bangladesh" />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label theme-text fw-semibold">Why do you want to join us? *</label>
                                            <textarea name="reason" value={formData.reason} onChange={handleChange} className="form-control theme-input py-2" rows="4" required placeholder="Tell us a little bit about yourself and why you want to volunteer..."></textarea>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <button type="submit" className="btn btn-success w-100 py-3 fs-5 fw-bold" disabled={loading}>
                                                {loading ? 'Submitting...' : 'Submit Application'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
        </main>
    );
};

export default Volunteer;