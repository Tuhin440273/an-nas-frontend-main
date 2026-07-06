import React from 'react';
import { Link } from 'react-router-dom';

const Donation = () => {
    // Total 10 Funds
    const funds = [
        { id: 1, title: 'Zakat Fund', cause: 'Zakat', desc: '100% of your Zakat is distributed among the rightful beneficiaries according to Shariah principles.', img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: 'Regular Donation', cause: 'General', desc: 'Contribute monthly or regularly to sustain our ongoing welfare projects and operational costs.', img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: 'Qurbani for All', cause: 'Qurbani', desc: 'Help us provide fresh meat to thousands of underprivileged families during Eid-ul-Adha.', img: 'https://images.unsplash.com/photo-1511117833452-482a71c99e4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 4, title: 'Iftar Fund', cause: 'Iftar', desc: 'Provide nutritious Iftar meals to fasting people in need and street children during Ramadan.', img: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 5, title: 'Education Support', cause: 'Education', desc: 'Support the education, accommodation, and healthcare of meritorious students from poor backgrounds.', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 6, title: 'Self-Reliance Fund', cause: 'Self-Reliance', desc: 'Help families break the cycle of poverty by providing them with small business assets or rickshaws.', img: 'https://images.unsplash.com/photo-1607004468138-c7e638b975aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 7, title: 'Emergency Disaster', cause: 'Disaster', desc: 'Stand by the victims during floods, cyclones, and sudden natural calamities with emergency relief.', img: 'https://images.unsplash.com/photo-1527636605051-93e18f2f2759?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 8, title: 'Winter Relief', cause: 'Winter', desc: 'Bring warmth to the poor people by distributing blankets and winter clothing across the country.', img: 'https://images.unsplash.com/photo-1518091043644-c1d44570d225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 9, title: 'Tree Plantation', cause: 'Environment', desc: 'Join the initiative to build a green earth. Plant trees for a healthier environment for future generations.', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 10, title: 'Medical Help', cause: 'Medical', desc: 'Providing life-saving medicines and organizing free health camps for those who cannot afford treatment.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ];

    return (
        <main className="bg-light pb-5">
            {/* Header Section */}
            <header className="page-header d-flex align-items-center mb-5" style={{ background: "linear-gradient(rgba(0, 106, 78, 0.85), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover", height: "250px" }}>
                <div className="container text-center text-white">
                    <h1 className="display-5 fw-bold">Donation Funds</h1>
                    <p className="lead">Contribute to specific causes and help us build a better future.</p>
                </div>
            </header>

            {/* Funds Grid Section */}
            <div className="container">
                <div className="row g-4 justify-content-center">
                    {funds.map((fund) => (
                        <div key={fund.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                                <img src={fund.img} alt={fund.title} className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} />
                                <div className="card-body p-4 d-flex flex-column text-center">
                                    <h4 className="fw-bold mb-3" style={{ color: '#006a4e' }}>{fund.title}</h4>
                                    <p className="text-muted mb-4 small">{fund.desc}</p>
                                    
                                    {/* Link correctly placed inside the map loop */}
                                    <Link 
                                        to={`/fund/${fund.cause.toLowerCase()}`} 
                                        className="btn btn-success w-100 py-2 fw-bold mt-auto rounded-3" 
                                        style={{ backgroundColor: '#008b65', border: 'none' }}
                                    >
                                        বিস্তারিত ও দান করুন
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </main>
    );
};

export default Donation;