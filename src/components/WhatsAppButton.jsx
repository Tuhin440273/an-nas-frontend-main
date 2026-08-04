import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = "8801713990042"; 
    
    const message = "Hello, I am contacting you from the AN-NAS Welfare Foundation website.";

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
                backgroundColor: '#25D366',
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
            title="Contact on WhatsApp"
        >
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    );
};

export default WhatsAppButton;