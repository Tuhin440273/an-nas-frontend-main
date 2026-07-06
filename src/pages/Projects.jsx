import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
    // ডাটা রাখার জন্য State তৈরি
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // পেজ লোড হওয়ার সাথে সাথে লারাভেল API কল হবে
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/projects')
            .then(response => {
                if (response.data.success) {
                    setProjects(response.data.data); // ডাটাগুলো projects ভেরিয়েবলে সেভ হলো
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container py-5" style={{ minHeight: '60vh' }}>
            <div className="text-center mb-5">
                <h5 className="text-warning fw-bold">Our Work</h5>
                <h2 className="text-success fw-bold">Latest Projects</h2>
            </div>

            {/* ডাটা আসার সময় লোডিং অ্যানিমেশন দেখাবে */}
            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="row g-4">
                    {/* ডাটাবেসে প্রজেক্ট থাকলে সেগুলো কার্ড আকারে দেখাবে */}
                    {projects.length > 0 ? (
                        projects.map(project => (
                            <div key={project.id} className="col-md-6 col-lg-4">
                                <div className="card h-100 shadow-sm border-0 theme-card">
                                    <img 
                                        src={`http://127.0.0.1:8000/storage/${project.image}`} 
                                        className="card-img-top" 
                                        alt={project.title_en} 
                                        style={{ height: '220px', objectFit: 'cover' }} 
                                    />
                                    <div className="card-body p-4">
                                        <span className="badge bg-success mb-2">{project.category}</span>
                                        <h4 className="card-title fw-bold text-dark">{project.title_en}</h4>
                                        <p className="card-text text-muted">
                                            {project.description_en.substring(0, 100)}...
                                        </p>
                                    </div>
                                    <div className="card-footer bg-white border-0 px-4 pb-4">
                                        <button className="btn btn-outline-success w-100 fw-bold">Read More</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // ডাটাবেস ফাঁকা থাকলে এই মেসেজ দেখাবে
                        <div className="col-12 text-center text-muted py-5">
                            <h4>No projects found!</h4>
                            <p>Please add some projects from your Laravel Admin Panel.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
        
    );
};

export default Projects;