import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import villages from './data/villages.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import HomePage from './pages/HomePage.jsx'
import NoticeBoardPage from './pages/NoticeBoardPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ServiceCategoryPage from './pages/ServiceCategoryPage.jsx'
import KisanHelpCategoryPage from './pages/KisanHelpCategoryPage.jsx'
import KisanProviderDetailsPage from './pages/KisanProviderDetailsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import SchemesPage from './pages/SchemesPage.jsx'
import SchemeDetailsPage from './pages/SchemeDetailsPage.jsx'

function App() {
  const { pathname } = useLocation()
  const [language, setLanguage] = useState('en')
  const [selectedVillage, setSelectedVillage] = useState('')

  function toggleLanguage() {
    setLanguage(language === 'en' ? 'hi' : 'en')
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <ScrollToTop />
      <Navbar language={language} onToggleLanguage={toggleLanguage} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              language={language}
              villages={villages}
              selectedVillage={selectedVillage}
              onVillageChange={setSelectedVillage}
            />
          }
        />
        <Route path="/notice-board" element={<NoticeBoardPage language={language} />} />
        <Route path="/schemes" element={<SchemesPage language={language} />} />
        <Route path="/schemes/:schemeId" element={<SchemeDetailsPage language={language} />} />
        <Route
          path="/services"
          element={
            <ServicesPage
              language={language}
              villages={villages}
              selectedVillage={selectedVillage}
              onVillageChange={setSelectedVillage}
            />
          }
        />
        <Route
          path="/services/:categorySlug"
          element={<ServiceCategoryPage language={language} selectedVillage={selectedVillage} />}
        />
        <Route
          path="/kisan-sahayata/:categorySlug"
          element={<KisanHelpCategoryPage language={language} selectedVillage={selectedVillage} />}
        />
        <Route path="/kisan-sahayata/:categorySlug/:providerId" element={<KisanProviderDetailsPage language={language} />} />
        <Route path="/about" element={<AboutPage language={language} />} />
        <Route path="/contact" element={<ContactPage language={language} />} />
        <Route path="/login" element={<LoginPage language={language} />} />
        <Route path="/signup" element={<SignupPage language={language} />} />
      </Routes>
      {pathname === '/' && <Footer language={language} />}
    </div>
  )
}

export default App
