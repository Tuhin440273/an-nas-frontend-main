import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const FundDetails = () => {
    const { fundName } = useParams(); 

    // ১০টি ফান্ডের বিস্তারিত ডেটা (এখানে প্রতিটিতে আলাদা video লিংক যুক্ত করা হয়েছে)
    const fundDetailsData = {
        zakat: { 
            title: 'যাকাত তহবিল', 
            video: 'https://www.youtube.com/embed/-zhcl889KJ8?', // যাকাতের ভিডিও (embed লিংক দেবেন)
            quote: '"তোমরা নামায প্রতিষ্ঠা কর এবং যাকাত দাও। তোমরা নিজের জন্য পূর্বে যে সৎকর্ম প্রেরণ করবে, তা আল্লাহর কাছে পাবে।"', 
            source: '(সূরা বাকারা, ১১০)', 
            desc: 'যাকাত ইসলামের মৌলিক পাঁচটি স্তম্ভের একটি এবং এটি দরিদ্রদের হক। কুরআনে যাকাত অনাদায়ে কঠোর শাস্তির কথা ঘোষণা করা হয়েছে। যাকাত শুধু একটি ইবাদত নয়, বরং সমাজে অর্থনৈতিক বৈষম্য কমাতে এবং দারিদ্র্য বিমোচনে ভূমিকা রাখে।', 
            sectors: ['স্বাবলম্বীকরণ প্রকল্প', 'শিক্ষার্থীদের শিক্ষাবৃত্তি', 'যাকাতের উপযোগী অন্যান্য শরয়ী খাতসমূহ'], 
            ctaTitle: 'আসুন একসাথে হাসি ফোটাই', 
            ctaDesc: 'আপনার যাকাত হবে দুস্থ মানুষের উপার্জনের অবলম্বন।' 
        },
        general: { 
            title: 'নিয়মিত অনুদান', 
            video: 'https://www.youtube.com/embed/tkSyVhNbkcM?', 
            quote: '"আল্লাহর কাছে সর্বাধিক প্রিয় আমল হলো, যা সদাসর্বদা নিয়মিত করা হয়, যদিও তা অল্প হয়।"', 
            source: '(সহীহ বুখারী)', 
            desc: 'নিয়মিত অনুদান ফাউন্ডেশনকে টিকিয়ে রাখতে সবচেয়ে বেশি সাহায্য করে।', 
            sectors: ['সকল সেবামূলক কার্যক্রম', 'নতুন কার্যক্রমের ব্যয় নির্বাহ'], 
            ctaTitle: 'অংশ নিন ফাউন্ডেশনের সকল কল্যাণমূলক কাজে', 
            ctaDesc: 'এই খাতে দানের মাধ্যমে ফাউন্ডেশনের সকল কল্যাণমূলক কাজের অংশীদার হতে পারবেন।' 
        },
        qurbani: { 
            title: 'সবার জন্য কুরবানী', 
            video: 'https://www.youtube.com/embed/kAetRy_INFU?', 
            quote: '"কুরবানীর পশুর রক্ত মাটিতে পড়ার আগেই তা আল্লাহর দরবারে কবুল হয়ে যায়।"', 
            source: '(তিরমিযি)', 
            desc: 'সুবিধাবঞ্চিত পরিবার যেন কুরবানীর গোশত থেকে বঞ্চিত না হয়, তাই আপনার অনুদান দিয়ে তাদের মুখে হাসি ফোটাতে পারেন।', 
            sectors: ['দেশের প্রত্যন্ত অঞ্চলে গোশত বিতরণ', 'অভাবী ও বিধবাদের মাঝে অগ্রাধিকার'], 
            ctaTitle: 'ঈদের আনন্দ ছড়িয়ে দিন', 
            ctaDesc: 'আপনার কুরবানীর একটি অংশ অসহায় মানুষের মুখে হাসি ফোটাবে।' 
        },
        iftar: { 
            title: 'ইফতার তহবিল', 
            video: 'https://www.youtube.', 
            quote: '"যে ব্যক্তি কোনো রোজাদারকে ইফতার করাবে, সে রোজাদারের সমান সওয়াব পাবে..."', 
            source: '(তিরমিযি)', 
            desc: 'পবিত্র রমজান মাসে অসহায়, পথশিশু ও ছিন্নমূল মানুষদের জন্য পুষ্টিকর ইফতারের ব্যবস্থা করা হয়।', 
            sectors: ['ভাসমান মানুষদের মাঝে ইফতার বিতরণ', 'পথশিশুদের মাঝে ইফতার প্রদান'], 
            ctaTitle: 'একজন রোজাদারের ইফতারের দায়িত্ব নিন', 
            ctaDesc: 'রমজানের রহমত ভাগ করে নিন সুবিধাবঞ্চিতদের সাথে।' 
        },
        education: { 
            title: 'শিক্ষা সহায়তা তহবিল', 
            video: 'https://www.youtube.com', 
            quote: '"যে ব্যক্তি জ্ঞান অর্জনের জন্য কোনো পথ অবলম্বন করে, আল্লাহ তার জন্য জান্নাতের পথ সহজ করে দেন।"', 
            source: '(সহীহ মুসলিম)', 
            desc: 'দারিদ্র্যের কারণে যেন কোনো মেধাবী শিক্ষার্থীর পড়াশোনা বন্ধ না হয়ে যায়, তাই আমরা তাদের মাসিক বৃত্তি দিয়ে সহায়তা করি।', 
            sectors: ['মেধাবী শিক্ষার্থীদের মাসিক বৃত্তি', 'মাদ্রাসা ছাত্রদের জন্য বই ও পোশাক'], 
            ctaTitle: 'একটি শিশুর শিক্ষার দায়িত্ব নিন', 
            ctaDesc: 'আপনার অনুদানে আলোকিত হবে একটি শিশুর ভবিষ্যৎ।' 
        },
        'self-reliance': { 
            title: 'স্বাবলম্বীকরণ প্রকল্প', 
            video: 'https://www.youtube.com', 
            quote: '"নিজ হাতে কাজ করে খাওয়ার চেয়ে উত্তম খাবার কেউ কখনো খায়নি।"', 
            source: '(সহীহ বুখারী)', 
            desc: 'আমরা সেলাই মেশিন, রিকশা বা ক্ষুদ্র ব্যবসার মূলধন দিয়ে অসহায় পরিবারগুলোকে স্বাবলম্বী হতে সাহায্য করি।', 
            sectors: ['বিধবাদের জন্য সেলাই মেশিন প্রদান', 'ক্ষুদ্র ব্যবসার জন্য আর্থিক সহায়তা'], 
            ctaTitle: 'একটি পরিবারকে স্বাবলম্বী করুন', 
            ctaDesc: 'আপনার দানে একটি পরিবার পাবে সম্মানের সাথে বাঁচার সুযোগ।' 
        },
        disaster: { 
            title: 'জরুরি দুর্যোগ তহবিল', 
            video: 'https://www.youtube.com', 
            quote: '"যে ব্যক্তি কোনো মুমিনের দুনিয়াবী সংকট দূর করবে, আল্লাহ কিয়ামতের দিন তার সংকট দূর করবেন।"', 
            source: '(সহীহ মুসলিম)', 
            desc: 'বন্যা, ঘূর্ণিঝড়—যেকোনো আকস্মিক দুর্যোগে দুর্গত মানুষদের পাশে দাঁড়ানোর জন্য আমাদের এই ইমার্জেন্সি ফান্ড ব্যবহার করা হয়।', 
            sectors: ['দুর্যোগে উদ্ধার কার্যক্রম ও আশ্রয় প্রদান', 'শুকনা খাবার ও বিশুদ্ধ পানি বিতরণ'], 
            ctaTitle: 'দুর্গতদের সাহায্যে এগিয়ে আসুন', 
            ctaDesc: 'বিপদের মুহূর্তে অসহায় মানুষের পাশে দাঁড়ান।' 
        },
        winter: { 
            title: 'শীতবস্ত্র তহবিল', 
            video: 'https://www.youtube.com', 
            quote: '"যে ব্যক্তি কোনো বস্ত্রহীনকে কাপড় পরাবে, আল্লাহ তাকে জান্নাতের সবুজ পোশাক পরাবেন।"', 
            source: '(তিরমিযি)', 
            desc: 'তীব্র শীতে দেশের উত্তরাঞ্চলসহ বিভিন্ন এলাকার অসহায় মানুষের মাঝে উন্নতমানের কম্বল ও গরম কাপড় বিতরণ করা হয়।', 
            sectors: ['ছিন্নমূল ও ভাসমান মানুষদের মাঝে কম্বল বিতরণ', 'দরিদ্র পরিবারে গরম কাপড় প্রদান'], 
            ctaTitle: 'শীতার্ত মানুষের মাঝে উষ্ণতা ছড়ান', 
            ctaDesc: 'আপনার দেওয়া একটি কম্বল বাঁচাতে পারে একটি অমূল্য জীবন।' 
        },
        environment: { 
            title: 'বৃক্ষরোপণ তহবিল', 
            video: 'https://www.youtube.com/embed', 
            quote: '"কোনো মুসলিম যদি গাছ লাগায়... তবে তা তার জন্য সদকা হিসেবে গণ্য হবে।"', 
            source: '(সহীহ বুখারী)', 
            desc: 'সবুজ পৃথিবী গড়ার লক্ষ্যে দেশব্যাপী ফলজ, বনজ ও ঔষধি গাছ লাগানোর এই প্রকল্পে অংশ নিন।', 
            sectors: ['দেশব্যাপী রাস্তার পাশে বৃক্ষরোপণ', 'শিক্ষাপ্রতিষ্ঠানে চারা বিতরণ'], 
            ctaTitle: 'সবুজ পৃথিবী গড়তে একটি গাছ লাগান', 
            ctaDesc: 'আগামী প্রজন্মের জন্য একটি বাসযোগ্য পৃথিবী রেখে যান।' 
        },
        medical: { 
            title: 'চিকিৎসা সহায়তা তহবিল', 
            video: 'https://www.youtube.com', 
            quote: '"আল্লাহর বান্দাদের মধ্যে আল্লাহর কাছে সবচেয়ে প্রিয় সেই ব্যক্তি, যে মানুষের সবচেয়ে বেশি উপকার করে।"', 
            source: '(তাবারানি)', 
            desc: 'অর্থাভাবে যারা জটিল রোগের চিকিৎসা করাতে পারছেন না, এই তহবিল থেকে তাদের স্বাস্থ্যসেবা দেওয়া হয়।', 
            sectors: ['জটিল ও ব্যয়বহুল রোগের চিকিৎসায় সহায়তা', 'প্রত্যন্ত অঞ্চলে ফ্রি মেডিকেল ক্যাম্প'], 
            ctaTitle: 'অসুস্থ মানুষের জীবন বাঁচাতে সাহায্য করুন', 
            ctaDesc: 'আপনার একটু সহযোগিতা ফিরিয়ে দিতে পারে একটি সুস্থ জীবন।' 
        }
    };

    const currentFund = fundDetailsData[fundName] || fundDetailsData['zakat'];
    const isRegularDonation = fundName === 'general';
    const isZakat = fundName === 'zakat';

    const [amount, setAmount] = useState('');
    const [frequency, setFrequency] = useState('monthly');
    const [paymentMethod, setPaymentMethod] = useState('bkash');
    const [name, setName] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');

    // যাকাত ক্যালকুলেটরের বিস্তারিত স্টেটসমূহ
    const [cash, setCash] = useState('');
    const [goldSilver, setGoldSilver] = useState('');
    const [investments, setInvestments] = useState('');
    const [businessStock, setBusinessStock] = useState('');
    const [receivables, setReceivables] = useState('');
    const [debts, setDebts] = useState('');

    // যাকাত হিসাবের লজিক
    const totalAssets = (Number(cash) || 0) + (Number(goldSilver) || 0) + (Number(investments) || 0) + (Number(businessStock) || 0) + (Number(receivables) || 0);
    const netWealth = totalAssets - (Number(debts) || 0);
    const calculatedZakat = netWealth > 0 ? (netWealth * 0.025).toFixed(0) : 0;
    
    const handleAmountClick = (value) => { setAmount(value); };

    /**
     * Submit donation data to Laravel Backend API
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Prepare the data payload
        const donationData = {
            name: name,
            email_or_phone: emailOrPhone,
            amount: amount,
            fund_type: fundName || 'zakat', // URL থেকে ফান্ডের নাম নিবে
            frequency: isRegularDonation ? frequency : 'one-time',
            payment_method: isRegularDonation ? paymentMethod : 'bank_transfer',
        };

        try {
            // 2. Show loading alert
            Swal.fire({
                title: 'প্রক্রিয়াকরণ হচ্ছে...',
                text: 'অনুগ্রহ করে অপেক্ষা করুন',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // 3. Send POST request to Laravel API
            const response = await fetch('http://127.0.0.1:8000/api/donate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(donationData)
            });

            const result = await response.json();

            // 4. Handle Response
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'আলহামদুলিল্লাহ!',
                    text: result.message || 'আপনার অনুদান সফলভাবে গ্রহণ করা হয়েছে।',
                    confirmButtonColor: '#006a4e'
                });
                
                // Clear the form after success
                setAmount('');
                setName('');
                setEmailOrPhone('');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'দুঃখিত!',
                    text: result.message || 'দয়া করে সবগুলো তথ্য সঠিকভাবে পূরণ করুন।',
                    confirmButtonColor: '#d33'
                });
            }
        } catch (error) {
            console.error('API Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'সার্ভার এরর!',
                text: 'লারাভেল সার্ভারের সাথে কানেক্ট করা যাচ্ছে না। আপনার ব্যাকএন্ড সার্ভার চালু আছে কি?',
                confirmButtonColor: '#d33'
            });
        }
    };
    

    const applyZakatAmount = () => {
        if(calculatedZakat > 0) {
            setAmount(calculatedZakat);
            const modalElement = document.getElementById('zakatCalculatorModal');
            const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) modalInstance.hide();
        }
    };

    return (
        <main className="bg-white pb-5">
            <div className="container pt-5 pb-4 text-center">
                <h1 className="fw-bold theme-text display-5" style={{ color: '#006a4e' }}>{currentFund.title}</h1>
                <p className="text-muted">চলুন একসাথে পরিবর্তন আনি</p>
            </div>

            <div className="container">
                <div className="row g-5">
                    
                    {/* Left Column */}
                    <div className="col-lg-7">
                        {/* ডাইনামিক ভিডিও অংশ */}
                        <div className="ratio ratio-16x9 mb-4 rounded-4 overflow-hidden shadow-sm border">
                            <iframe 
                                src={currentFund.video} 
                                title={`${currentFund.title} Video`} 
                                allowFullScreen>
                            </iframe>
                        </div>

                        <div className="p-4 rounded-4 mb-4 text-center" style={{ backgroundColor: '#eefcf5', border: '1px solid #d1f0e1' }}>
                            <p className="fw-bold theme-text fs-5 mb-2">{currentFund.quote}</p>
                            <p className="text-muted mb-0 fw-semibold">{currentFund.source}</p>
                        </div>

                        <div className="theme-text mb-4" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                            <p>{currentFund.desc}</p>
                        </div>

                        <div className="p-4 p-md-5 rounded-4 mt-4" style={{ backgroundColor: '#f4f6f5' }}>
                            <h4 className="fw-bold mb-4" style={{ color: '#1a412c' }}>
                                {isRegularDonation ? 'ব্যয়ের খাত' : 'যে খাতগুলোকে আমরা গুরুত্ব দিই'}
                            </h4>
                            <ul className="list-unstyled mb-0">
                                {currentFund.sectors.map((sector, index) => (
                                    <li key={index} className="d-flex mb-3 align-items-start">
                                        <i className="fa-solid fa-circle-check text-success fs-5 me-3 mt-1"></i>
                                        <span className="fs-5 text-dark">{sector}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column (Donation Form) */}
                    <div className="col-lg-5">
                        <div className="p-4 rounded-top-4 text-white text-center" style={{ backgroundColor: '#008b65' }}>
                            <h4 className="fw-bold mb-2">{currentFund.ctaTitle}</h4>
                            <p className="mb-0" style={{ fontSize: '0.9rem', opacity: '0.9' }}>{currentFund.ctaDesc}</p>
                            
                            {isZakat && (
                                <button className="btn btn-light text-success fw-bold rounded-pill px-4 py-2 mt-3 shadow-sm" data-bs-toggle="modal" data-bs-target="#zakatCalculatorModal">
                                    <i className="fa-solid fa-calculator me-2"></i> আপনার যাকাত সহজেই হিসাব করুন
                                </button>
                            )}
                        </div>

                        <div className="p-4 border border-top-0 rounded-bottom-4 shadow-sm mb-4 bg-white">
                            <form onSubmit={handleSubmit}>
                                {isRegularDonation && (
                                    <div className="d-flex mb-4 rounded-2 overflow-hidden border border-success">
                                        <button type="button" className={`btn w-50 rounded-0 fw-bold py-2 ${frequency === 'daily' ? 'btn-success' : 'btn-light text-success'}`} onClick={() => setFrequency('daily')}>দৈনিক</button>
                                        <button type="button" className={`btn w-50 rounded-0 fw-bold py-2 ${frequency === 'monthly' ? 'btn-success' : 'btn-light text-success'}`} onClick={() => setFrequency('monthly')}>মাসিক</button>
                                    </div>
                                )}

                                <div className="row g-2 mb-3">
                                    {(isRegularDonation ? ['100', '50', '30', '20', '10'] : ['50000', '10000', '5000', '1000', '100']).map((val) => (
                                        <div className="col-4" key={val}>
                                            <button type="button" className={`btn w-100 fw-bold py-2 ${amount === val ? 'btn-success' : 'btn-outline-success'}`} onClick={() => handleAmountClick(val)}>৳ {val}</button>
                                        </div>
                                    ))}
                                    <div className="col-4">
                                        <button type="button" className="btn btn-outline-success w-100 fw-bold py-2" style={{ fontSize: "0.85rem" }} onClick={() => setAmount('')}>অন্য পরিমাণ</button>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">পরিমাণ *</label>
                                    <input type="number" className="form-control bg-light py-2" value={amount} onChange={(e) => setAmount(e.target.value)} required placeholder="৳ টাকার পরিমাণ" />
                                </div>

                                {/* আগের কোড পরিবর্তন করে এটি দিন */}
<div className="mb-3">
    <label className="form-label fw-bold">আপনার নাম</label>
    <input type="text" className="form-control py-2" placeholder="লিখুন" 
        value={name} onChange={(e) => setName(e.target.value)} 
    />
</div>

<div className="mb-3">
    <label className="form-label fw-bold">মোবাইল / ইমেইল *</label>
    <input type="text" className="form-control py-2" required placeholder="লিখুন" 
        value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} 
    />
</div>

                                {isRegularDonation && (
                                    <>
                                        <div className="mb-4"><label className="form-label fw-bold">অন্য কারো পক্ষ থেকে দান করে থাকলে তার নাম লিখুন</label><input type="text" className="form-control py-2" placeholder="লিখুন" /></div>
                                        <div className="mb-4">
                                            <label className="form-label fw-bold text-danger">পেমেন্ট মেথড *</label>
                                            <div className="d-flex gap-3 align-items-center p-3 border rounded-3 bg-light">
                                                <div className="form-check"><input className="form-check-input" type="radio" name="payment" id="bkash" checked={paymentMethod === 'bkash'} onChange={() => setPaymentMethod('bkash')} /><label className="form-check-label fw-bold" style={{ color: '#e2136e' }} htmlFor="bkash">bKash</label></div>
                                                <div className="form-check"><input className="form-check-input" type="radio" name="payment" id="nagad" checked={paymentMethod === 'nagad'} onChange={() => setPaymentMethod('nagad')} /><label className="form-check-label fw-bold" style={{ color: '#f7931e' }} htmlFor="nagad">Nagad</label></div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <button type="submit" className="btn btn-success w-100 py-3 fw-bold fs-5 rounded-3 mt-2">পরবর্তী ধাপ</button>
                            </form>
                        </div>

                        {!isRegularDonation && (
                            <div className="card border-0 shadow-sm rounded-4">
                                <div className="card-body p-4 d-flex align-items-center">
                                    <div className="me-4"><i className="fa-solid fa-building-columns text-success" style={{ fontSize: '3rem' }}></i></div>
                                    <div>
                                        <table className="table table-borderless table-sm mb-0">
                                            <tbody>
                                                <tr><td className="text-muted">ব্যাংক:</td><td className="fw-bold">Islami Bank PLC</td></tr>
                                                <tr><td className="text-muted">নাম:</td><td className="fw-bold">AN-NAS Foundation</td></tr>
                                                <tr><td className="text-muted">অ্যাকাউন্ট:</td><td className="fw-bold">20503100100160806</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Extended Zakat Calculator Modal */}
            <div className="modal fade" id="zakatCalculatorModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content border-0 shadow-lg rounded-4">
                        <div className="modal-header border-bottom-0 pb-0 pt-4 px-4">
                            <h4 className="modal-title fw-bold text-success"><i className="fa-solid fa-calculator me-2"></i> যাকাত ক্যালকুলেটর</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body p-4">
                            <div className="alert alert-success bg-opacity-10 border-success border-opacity-25 rounded-3 mb-4">
                                <i className="fa-solid fa-circle-info me-2 text-success"></i>
                                <strong>নোট:</strong> আপনার নিট সম্পদ যদি নিসাব পরিমাণ (প্রায় ৫৯৫ গ্রাম রূপা বা ৮৫ গ্রাম স্বর্ণের সমমূল্য) হয় এবং তা এক বছর স্থায়ী হয়, তবেই যাকাত ফরজ হবে।
                            </div>
                            
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <h5 className="fw-bold text-success mb-3 border-bottom pb-2">যাকাতযোগ্য সম্পদ (+)</h5>
                                    <div className="mb-3"><label className="form-label fw-semibold text-dark small mb-1">হাতে ও ব্যাংকে থাকা নগদ টাকা</label><div className="input-group input-group-sm"><span className="input-group-text bg-light">৳</span><input type="number" className="form-control" value={cash} onChange={(e) => setCash(e.target.value)} placeholder="0" /></div></div>
                                    <div className="mb-3"><label className="form-label fw-semibold text-dark small mb-1">স্বর্ণ ও রূপার বর্তমান বাজারমূল্য</label><div className="input-group input-group-sm"><span className="input-group-text bg-light">৳</span><input type="number" className="form-control" value={goldSilver} onChange={(e) => setGoldSilver(e.target.value)} placeholder="0" /></div></div>
                                    <div className="mb-3"><label className="form-label fw-semibold text-dark small mb-1">বিনিয়োগ, শেয়ার বা সঞ্চয়পত্র</label><div className="input-group input-group-sm"><span className="input-group-text bg-light">৳</span><input type="number" className="form-control" value={investments} onChange={(e) => setInvestments(e.target.value)} placeholder="0" /></div></div>
                                    <div className="mb-3"><label className="form-label fw-semibold text-dark small mb-1">ব্যবসার বিক্রয়যোগ্য পণ্য (স্টক)</label><div className="input-group input-group-sm"><span className="input-group-text bg-light">৳</span><input type="number" className="form-control" value={businessStock} onChange={(e) => setBusinessStock(e.target.value)} placeholder="0" /></div></div>
                                    <div className="mb-3"><label className="form-label fw-semibold text-dark small mb-1">প্রাপ্য টাকা (যা ফেরত পাওয়ার আশা আছে)</label><div className="input-group input-group-sm"><span className="input-group-text bg-light">৳</span><input type="number" className="form-control" value={receivables} onChange={(e) => setReceivables(e.target.value)} placeholder="0" /></div></div>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="fw-bold text-danger mb-3 border-bottom pb-2">বাদ যাবে এমন ঋণ বা দায় (-)</h5>
                                    <div className="mb-3"><label className="form-label fw-semibold text-dark small mb-1">আপনার নিজের ঋণ বা ধার (পরিশোধ্য)</label><div className="input-group input-group-sm"><span className="input-group-text bg-light border-danger text-danger">৳</span><input type="number" className="form-control border-danger" value={debts} onChange={(e) => setDebts(e.target.value)} placeholder="0" /></div></div>
                                    <div className="mt-5 p-3 bg-light rounded-3 text-center border">
                                        <p className="mb-1 text-muted fw-bold">আপনার প্রদেয় যাকাতের পরিমাণ (২.৫%)</p>
                                        <h2 className="fw-bold text-success mb-0">৳ {calculatedZakat}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-top-0 px-4 pb-4">
                            <button type="button" className="btn btn-light fw-bold" data-bs-dismiss="modal">বাতিল করুন</button>
                            <button type="button" className="btn btn-success fw-bold px-4" onClick={applyZakatAmount} disabled={calculatedZakat <= 0}>এই পরিমাণ দান করুন</button>
                        </div>
                    </div>
                </div>
            </div>

            
        </main>
    );
};

export default FundDetails;