import React from 'react';

const WhatsAppButton = () => {
    // আপনার হোয়াটসঅ্যাপ নম্বর (Country code '880' সহ, কিন্তু '+' ছাড়া)
    const phoneNumber = "8801713990042"; 
    
    // ইউজার ক্লিক করলে ডিফল্টভাবে যে মেসেজটি লেখা থাকবে (আপনি চাইলে পরিবর্তন করতে পারেন)
    const message = "হ্যালো, আমি এএন-নাস ওয়েলফেয়ার ফাউন্ডেশনের ওয়েবসাইট থেকে যোগাযোগ করছি।";

    // হোয়াটসঅ্যাপের এপিআই লিংক
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                backgroundColor: '#25D366', // হোয়াটসঅ্যাপের আসল সবুজ রঙ
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '35px',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                zIndex: 1000,
                textDecoration: 'none',
                transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            title="WhatsApp-এ যোগাযোগ করুন"
        >
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    );
};

export default WhatsAppButton;