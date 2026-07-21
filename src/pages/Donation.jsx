import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ট্রান্সলেশন ইম্পোর্ট করা হলো

import qurbaniImg from '../assets/image/Qurbani-for-All.png';
import selfRelianceImg from '../assets/image/Self-Reliance-Fund.png';
import disasterImg from '../assets/image/Emergency-Disaster.png';
import winterImg from '../assets/image/Winter-Relief.png';
import Iftar from '../assets/image/Iftar-Fund.png';


const Donation = () => {
    const { t } = useTranslation(); // হুক কল করা হলো

    const funds = [
        { id: 1, title: t('f_zakat_title'), cause: 'Zakat', desc: t('f_zakat_desc'), img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: t('f_regular_title'), cause: 'General', desc: t('f_regular_desc'), img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: t('f_qurbani_title'), cause: 'Qurbani', desc: t('f_qurbani_desc'), img: qurbaniImg },
        { id: 4, title: t('f_iftar_title'), cause: 'Iftar', desc: t('f_iftar_desc'), img: Iftar },
        { id: 5, title: t('f_edu_title'), cause: 'Education', desc: t('f_edu_desc'), img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 6, title: t('f_self_title'), cause: 'Self-Reliance', desc: t('f_self_desc'), img: selfRelianceImg },
        { id: 7, title: t('f_disaster_title'), cause: 'Disaster', desc: t('f_disaster_desc'), img: disasterImg },
        { id: 8, title: t('f_winter_title'), cause: 'Winter', desc: t('f_winter_desc'), img: winterImg },
        { id: 9, title: t('f_tree_title'), cause: 'Environment', desc: t('f_tree_desc'), img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 10, title: t('f_medical_title'), cause: 'Medical', desc: t('f_medical_desc'), img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ];

    return (
        <main className="bg-light pb-5">
            <header className="page-header d-flex align-items-center mb-5" style={{ background: "linear-gradient(rgba(0, 106, 78, 0.85), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover", height: "250px" }}>
                <div className="container text-center text-white">
                    <h1 className="display-5 fw-bold">{t('don_header_title')}</h1>
                    <p className="lead">{t('don_header_sub')}</p>
                </div>
            </header>

            <div className="container">
                <div className="row g-4 justify-content-center">
                    {funds.map((fund) => (
                        <div key={fund.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                                <img src={fund.img} alt={fund.title} className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} />
                                <div className="card-body p-4 d-flex flex-column text-center">
                                    <h4 className="fw-bold mb-3" style={{ color: '#006a4e' }}>{fund.title}</h4>
                                    <p className="text-muted mb-4 small">{fund.desc}</p>
                                    <Link
                                        to={`/fund/${fund.cause.toLowerCase()}`}
                                        className="btn btn-success w-100 py-2 fw-bold mt-auto rounded-3"
                                        style={{ backgroundColor: '#008b65', border: 'none' }}
                                    >
                                        {t('don_btn')}
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