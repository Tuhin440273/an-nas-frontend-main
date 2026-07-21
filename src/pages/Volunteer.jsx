import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next'; // ট্রান্সলেশন ইম্পোর্ট করা হলো

const Volunteer = () => {
    const { t } = useTranslation(); // হুক কল করা হলো

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
            const response = await axios.post('http://127.0.0.1:8000/api/volunteer', formData);

            if (response.data.success) {
                // Show success message with translation
                Swal.fire({
                    icon: 'success',
                    title: t('swal_success_title'),
                    text: response.data.message || t('swal_success_text'),
                    confirmButtonColor: '#006a4e'
                });

                // Clear form fields
                setFormData({ name: '', phone: '', email: '', address: '', reason: '' });
            }
        } catch (error) {
            console.error("Volunteer Form Error:", error);
            Swal.fire({
                icon: 'error',
                title: t('swal_error_title'),
                text: t('swal_error_text'),
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
                    <h1 className="display-4 fw-bold">{t('vol_header_title')}</h1>
                    <p className="lead mx-auto" style={{ maxWidth: "600px" }}>{t('vol_header_sub')}</p>
                </div>
            </header>

            {/* Volunteer Info & Form Section */}
            <section className="py-5 bg-light-alt theme-bg-alt">
                <div className="container py-4">
                    <div className="row g-5 align-items-center">
                        
                        {/* Why Volunteer With Us Info */}
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <h2 className="fw-bold theme-text mb-4">{t('vol_info_title')}</h2>
                            <p className="theme-text-muted mb-4">{t('vol_info_desc1')}</p>
                            
                            <ul className="list-unstyled volunteer-benefits theme-text mt-4">
                                <li className="mb-3 d-flex align-items-start">
                                    <i className="fa-solid fa-circle-check text-success fs-4 me-3 mt-1"></i>
                                    <div>
                                        <h5 className="fw-bold mb-1">{t('vol_benefit_1_title')}</h5>
                                        <p className="text-muted theme-text-muted mb-0">{t('vol_benefit_1_desc')}</p>
                                    </div>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <i className="fa-solid fa-circle-check text-success fs-4 me-3 mt-1"></i>
                                    <div>
                                        <h5 className="fw-bold mb-1">{t('vol_benefit_2_title')}</h5>
                                        <p className="text-muted theme-text-muted mb-0">{t('vol_benefit_2_desc')}</p>
                                    </div>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <i className="fa-solid fa-circle-check text-success fs-4 me-3 mt-1"></i>
                                    <div>
                                        <h5 className="fw-bold mb-1">{t('vol_benefit_3_title')}</h5>
                                        <p className="text-muted theme-text-muted mb-0">{t('vol_benefit_3_desc')}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Volunteer Form */}
                        <div className="col-lg-7">
                            <div className="card theme-card border-0 shadow-lg p-4 p-md-5 rounded-4 h-100">
                                <h3 className="fw-bold theme-text mb-4 text-center">{t('vol_form_title')}</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label theme-text fw-semibold">{t('form_name')}</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control theme-input py-2" required placeholder={t('form_name_placeholder')} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label theme-text fw-semibold">{t('form_phone')}</label>
                                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control theme-input py-2" required placeholder={t('form_phone_placeholder')} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label theme-text fw-semibold">{t('form_email')}</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control theme-input py-2" placeholder={t('form_email_placeholder')} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label theme-text fw-semibold">{t('form_address')}</label>
                                            <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control theme-input py-2" required placeholder={t('form_address_placeholder')} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label theme-text fw-semibold">{t('form_reason')}</label>
                                            <textarea name="reason" value={formData.reason} onChange={handleChange} className="form-control theme-input py-2" rows="4" required placeholder={t('form_reason_placeholder')}></textarea>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <button type="submit" className="btn btn-success w-100 py-3 fs-5 fw-bold" disabled={loading}>
                                                {loading ? t('btn_submitting') : t('btn_submit_app')}
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