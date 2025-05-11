import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add 404 and other routes as needed */}
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </PageLayout>
    </Router>
  );
}

export default App;