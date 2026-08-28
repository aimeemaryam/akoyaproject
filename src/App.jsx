import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';

// Components & Common Layout
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';

// Pages
import Homepages from './Components/Pages/Homepages';
import Login from './Components/Loginpage/Login';
import Signup from './Components/Loginpage/Signup';
import Booking from './Components/BookNow/Booking';
import Terms from './Components/TermsConditions/Terms';
import Serivcepage from './Components/Pages/Servicepage';
import Sitemap from './Components/TermsConditions/Sitemap';
import Privacy from './Components/TermsConditions/Privacy';
import Aboutpages from './Components/Pages/Aboutpages';
import Visionmission from './Components/Pages/Visionmission';
import Contactpages from './Components/Pages/Contactpages';

// Layout Wrapper to conditionally render Navbar & Footer
const AppLayout = () => {
  const location = useLocation();

  // Paths where Footer (and Navbar) should be hidden
  const hideLayout = ['/login', '/signup'].includes(location.pathname.toLowerCase());

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Homepages />} />
        
        {/* Services Routes */}
        <Route path="/services" element={<Serivcepage />} />
        <Route path="/servicepage" element={<Serivcepage />} />
        <Route path="/Servicepage" element={<Serivcepage />} />

        {/* About Routes */}
        <Route path="/about" element={<Aboutpages />} />
        <Route path="/aboutpages" element={<Aboutpages />} />
        <Route path="/Aboutpages" element={<Aboutpages />} />
    
        {/* Vision & Mission Routes */}
        <Route path="/vision-mission" element={<Visionmission />} />
        <Route path="/Vision-Mission" element={<Visionmission />} />
        <Route path="/visionmission" element={<Visionmission />} />
        <Route path="/Visionmission" element={<Visionmission />} />

        {/* Contact Routes */}
        <Route path="/contact" element={<Contactpages />} />
        <Route path="/contactpages" element={<Contactpages />} />
        <Route path="/Contactpages" element={<Contactpages />} />

        {/* Terms & Conditions Routes */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/Sitemap" element={<Sitemap />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/Privacy" element={<Privacy />} />

        {/* Auth & Booking Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppLayout />
      </Router>
    </LanguageProvider>
  );
}

export default App;