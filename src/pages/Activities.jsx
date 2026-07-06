import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/activities')
            .then(response => {
                if (response.data.data) {
                    setActivities(response.data.data);
                } else if (response.data.activities) {
                    setActivities(response.data.activities);
                } else if (Array.isArray(response.data)) {
                    setActivities(response.data);
                }
            })
            .catch(error => console.error("Error fetching activities:", error));
    }, []);

    return (
        <main className="bg-light pb-5">
            {/* Header Section */}
            <header className="page-header d-flex align-items-center mb-5" style={{ background: "linear-gradient(rgba(0, 106, 78, 0.85), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover", height: "300px" }}>
                <div className="container text-center text-white">
                    <h1 className="display-4 fw-bold">Our Activities</h1>
                    <p className="lead mx-auto mt-2" style={{ maxWidth: "700px" }}>
                        মাঠপর্যায়ে আমাদের নিয়মিত কার্যক্রম এবং প্রজেক্টসমূহের আপডেট। আপনাদের অনুদান কীভাবে মানুষের মুখে হাসি ফোটাচ্ছে তা নিজেই দেখুন।
                    </p>
                </div>
            </header>

            {/* Activities Grid */}
            <div className="container">
                <div className="row g-4">
                    {activities.map((activity) => (
                        <div key={activity.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden" style={{ transition: "all 0.3s ease" }}>
                                {/* Image Container */}
                                <div className="position-relative">
                                    <img 
                                        src={
                                            activity.image 
                                            ? (activity.image.startsWith('http') ? activity.image : `http://127.0.0.1:8000/storage/${activity.image}`) 
                                            : activity.img
                                        } 
                                        alt={activity.title} 
                                        className="card-img-top" 
                                        style={{ height: '240px', objectFit: 'cover' }} 
                                        // যদি কোনো কারণে ছবি না পায়, তবে এই ডামি ছবিটি দেখাবে
                                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }}
                                    />
                                    {/* Date Badge */}
                                    <div className="position-absolute top-0 end-0 bg-success text-white px-3 py-1 m-3 rounded-pill fw-semibold shadow-sm" style={{ fontSize: "0.85rem" }}>
                                        <i className="fa-regular fa-calendar me-2"></i>{activity.date}
                                    </div>
                                </div>
                                
                                <div className="card-body p-4 d-flex flex-column">
                                    <h4 className="fw-bold mb-3 theme-text" style={{ color: '#006a4e', lineHeight: "1.4" }}>{activity.title}</h4>
                                    
                                    {/* এই অংশটি HTML ট্যাগগুলোকে সুন্দর ডিজাইনে রূপান্তর করবে */}
                                    <div 
                                        className="text-muted mb-4 flex-grow-1" 
                                        style={{ fontSize: "0.95rem", textAlign: "justify" }}
                                        dangerouslySetInnerHTML={{ __html: activity.description || activity.desc }}
                                    />
                                    
                                    <button className="btn btn-outline-success w-100 py-2 fw-bold mt-auto rounded-3">
                                        বিস্তারিত পড়ুন <i className="fa-solid fa-arrow-right ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Activities;