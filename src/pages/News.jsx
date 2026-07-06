import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const News = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        // লারাভেল API থেকে News ডাটা আনা হচ্ছে
        axios.get('http://127.0.0.1:8000/api/news')
            .then(response => {
                if (response.data.data) {
                    setNewsArticles(response.data.data);
                } else if (response.data.news) {
                    setNewsArticles(response.data.news);
                } else if (Array.isArray(response.data)) {
                    setNewsArticles(response.data);
                }
            })
            .catch(error => console.error("Error fetching news:", error));
    }, []);

    return (
        <main className="bg-light pb-5 min-vh-100">
            {/* Header Section */}
            <header className="page-header d-flex align-items-center mb-5" style={{ background: "linear-gradient(rgba(0, 106, 78, 0.85), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover", height: "250px" }}>
                <div className="container text-center text-white">
                    <h1 className="display-5 fw-bold">News & Updates</h1>
                    <p className="lead mx-auto">Get the latest news, events, and important notices of the foundation</p>
                </div>
            </header>

            <div className="container">
                <div className="row g-4">
                    {newsArticles.map((news) => (
                        <div key={news.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden" style={{ transition: "transform 0.3s ease" }}>
                                {/* Image and Category Badge */}
                                <div className="position-relative">
                                    {/* ছবির ম্যাজিক লিংক */}
                                    <img 
                                        src={
                                            news.image 
                                            ? (news.image.startsWith('http') ? news.image : `http://127.0.0.1:8000/storage/${news.image}`) 
                                            : news.img
                                        } 
                                        alt={news.title} 
                                        className="card-img-top" 
                                        style={{ height: '220px', objectFit: 'cover' }} 
                                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }}
                                    />
                                    <div className="position-absolute top-0 start-0 bg-warning text-dark px-3 py-1 m-3 rounded-pill fw-bold shadow-sm" style={{ fontSize: "0.85rem" }}>
                                        {news.category || "News"}
                                    </div>
                                </div>
                                
                                <div className="card-body p-4 d-flex flex-column bg-white">
                                    {/* Date */}
                                    <p className="text-muted mb-2" style={{ fontSize: "0.85rem" }}>
                                        <i className="fa-regular fa-clock me-2 text-success"></i>{news.date}
                                    </p>
                                    
                                    {/* Title */}
                                    <h4 className="fw-bold mb-3" style={{ color: '#006a4e', lineHeight: "1.4" }}>
                                        {news.title}
                                    </h4>
                                    
                                    {/* Short Description (HTML ট্যাগগুলোকে ডিজাইনে রূপান্তর করার কোড) */}
                                    <div 
                                        className="text-muted mb-4 flex-grow-1" 
                                        style={{ fontSize: "0.95rem" }}
                                        dangerouslySetInnerHTML={{ __html: news.description || news.desc }}
                                    />
                                    
                                    {/* Read More Button */}
                                    <button className="btn btn-outline-success w-100 py-2 fw-bold mt-auto rounded-3">
                                        Read More <i className="fa-solid fa-arrow-right ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination / Load More */}
                <div className="text-center mt-5">
                    <button className="btn btn-success px-5 py-2 fw-bold rounded-pill shadow-sm">
                        Load More News <i className="fa-solid fa-rotate-right ms-2"></i>
                    </button>
                </div>
            </div>
            
        </main>
    );
};

export default News;