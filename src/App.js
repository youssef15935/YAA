import './output.css';
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Details from './components/Details';
import Contact from './components/Contact';
import Profile from './components/Profil';
import { LanguageProvider } from './components/Language';

function App() {
  return (
    <LanguageProvider>
    <Router>
      <div className="font-sans text-gray-800">
        <Header />
        <main className="pt-8">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;
