import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
    // স্টেট কন্ট্রোল: লারাভেল থেকে 'photo' বা 'video' আসছে, তাই ডিফোল্ট 'photo' করা হলো
    const [activeTab, setActiveTab] = useState('photo'); 
    const [activeCategory, setActiveCategory] = useState('সবগুলো');
    const [mediaData, setMediaData] = useState([]); 

    // বাম পাশের মেনুর ক্যাটাগরি লিস্ট
    const categories = ['সবগুলো', 'বন্যা', 'খাদ্য বিতরণ', 'স্বাবলম্বীকরণ', 'কুরবানী', 'শীতবস্ত্র বিতরণ'];

    // লারাভেল API থেকে ডাটা কল করা
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/galleries')
            .then(response => {
                console.log("React Recieved Data:", response.data);
                
                // অবজেক্টের ভেতর থেকে আসল ডাটা (array) বের করে আনা হচ্ছে
                if (response.data && response.data.data) {
                    setMediaData(response.data.data); // অবজেক্টের ভেতরের data অ্যারে সেট করা হলো
                } else if (Array.isArray(response.data)) {
                    setMediaData(response.data);
                }
            })
            .catch(error => console.error("Error fetching gallery data:", error));
    }, []);

    // ইউটিউব লিংক রূপান্তর করার হেল্পার ফাংশন
    const getYouTubeEmbedUrl = (url) => {
        if (!url) return '';
        if (url.includes('embed/')) return url;
        
        let videoId = '';
        if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1]?.split(/[?#]/)[0];
        } else if (url.includes('youtube.com/watch')) {
            videoId = url.split('v=')[1]?.split(/[&#]/)[0];
        }
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    };

    // ফিল্টারিং লজিক: ক্যাটাগরি এবং টাইপ দুটোই নিখুঁতভাবে চেক করবে
    const filteredMedia = mediaData.filter(item => {
        // ডাটাবেসের 'type' (photo/video) এবং রিঅ্যাক্টের 'activeTab' চেক করা হচ্ছে
        const matchTab = item.type === activeTab;
        
        // ক্যাটাগরি ট্রিম (.trim()) করে চেক করা হচ্ছে যাতে স্পেসের ঝামেলা না হয়
        const matchCategory = activeCategory === 'সবগুলো' || 
            (item.category && item.category.trim() === activeCategory.trim());
            
        return matchTab && matchCategory;
    });

    return (
        <main className="bg-light pb-5 min-vh-100">
            {/* Header Section */}
            <header className="page-header d-flex align-items-center mb-5" style={{ background: "linear-gradient(rgba(0, 106, 78, 0.85), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover", height: "250px" }}>
                <div className="container text-center text-white">
                    <h1 className="display-5 fw-bold">ফটো ও ভিডিও গ্যালারি</h1>
                    <p className="lead mx-auto">মাঠপর্যায়ে AN-NAS ফাউন্ডেশনের কার্যক্রমের কিছু দৃশ্যমান চিত্র</p>
                </div>
            </header>

            <div className="container">
                {/* Top Tab Buttons (ছবি / ভিডিও) */}
                <div className="d-flex justify-content-center mb-5">
                    <div className="bg-white rounded-3 shadow-sm p-1 d-inline-flex">
                        <button 
                            className={`btn px-5 py-2 fw-bold border-0 ${activeTab === 'photo' ? 'bg-success bg-opacity-25 text-success' : 'text-muted bg-white'}`}
                            style={{ borderRadius: '8px', transition: 'all 0.3s' }}
                            onClick={() => { setActiveTab('photo'); setActiveCategory('সবগুলো'); }}
                        >
                            ছবি
                        </button>
                        <button 
                            className={`btn px-5 py-2 fw-bold border-0 ${activeTab === 'video' ? 'bg-success bg-opacity-25 text-success' : 'text-muted bg-white'}`}
                            style={{ borderRadius: '8px', transition: 'all 0.3s' }}
                            onClick={() => { setActiveTab('video'); setActiveCategory('সবগুলো'); }}
                        >
                            ভিডিও
                        </button>
                    </div>
                </div>

                <div className="row g-4">
                    {/* Left Sidebar (Categories) */}
                    <div className="col-lg-3">
                        <div className="card border-0 shadow-sm rounded-4 p-3 sticky-top" style={{ top: '100px' }}>
                            <ul className="list-unstyled mb-0">
                                {categories.map((category, index) => (
                                    <li key={index} className="mb-2">
                                        <button 
                                            onClick={() => setActiveCategory(category)}
                                            className="btn w-100 text-start fw-semibold py-2 px-3 border-0"
                                            style={{
                                                backgroundColor: 'transparent',
                                                color: activeCategory === category ? '#006a4e' : '#495057',
                                                borderLeft: activeCategory === category ? '4px solid #006a4e' : '4px solid transparent',
                                                borderRadius: '0 8px 8px 0',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {category}
                                        </button>
                                        {index !== categories.length - 1 && <hr className="my-1 text-muted opacity-25" />}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Main Area (Media Grid) */}
                    <div className="col-lg-9">
                        <div className="row g-4">
                            {filteredMedia.length > 0 ? (
                                filteredMedia.map((item) => (
                                    <div key={item.id} className="col-md-6">
                                        <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100" style={{ minHeight: '250px' }}>
                                            {item.type === 'photo' ? (
                                                <img 
                                                    src={`http://127.0.0.1:8000/storage/${item.image}`} 
                                                    alt={item.title} 
                                                    className="w-100 h-100" 
                                                    style={{ objectFit: 'cover', minHeight: '250px' }} 
                                                    onError={(e) => { 
                                                        e.target.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; 
                                                    }}
                                                />
                                            ) : (
                                                <div className="ratio ratio-16x9 h-100" style={{ minHeight: '250px' }}>
                                                    <iframe 
                                                        src={getYouTubeEmbedUrl(item.video_url)} 
                                                        title={item.title} 
                                                        allowFullScreen
                                                        style={{ border: 'none' }}
                                                    ></iframe>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center py-5">
                                    <h4 className="text-muted mt-4">এই ক্যাটাগরিতে কোনো {activeTab === 'photo' ? 'ছবি' : 'ভিডিও'} পাওয়া যায়নি।</h4>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Gallery;