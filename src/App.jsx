import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// কম্পোনেন্টগুলো ইমপোর্ট করা
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Donation from './pages/Donation';
import Contact from './pages/Contact';
import About from './pages/About'; 
import Volunteer from './pages/Volunteer';
import FundDetails from './pages/FundDetails';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import News from './pages/News';

function App() {
  return (
    <Router>
      {/* Header সব পেজের উপরে থাকবে */}
      <Header />
      
      {/* Routes এর ভেতর পেজগুলো পরিবর্তন হবে */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
       <Route path="/donation" element={<Donation />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/about" element={<About />} />
       <Route path="/volunteer" element={<Volunteer />} />
       <Route path="/fund/:fundName" element={<FundDetails />} />
       <Route path="/activities" element={<Activities />} />
       <Route path="/gallery" element={<Gallery />} />
       <Route path="/news" element={<News />} />
       
      </Routes>

      {/* Footer সব পেজের নিচে থাকবে */}
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
