import './output.css';
import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Details from './components/Details';
import Contact from './components/Contact';
import Profile from './components/Profil';
import Admin from './components/Admin';
import Login from './components/Login';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));


  // Define routes where Header should not be shown
  const noHeaderRoutes = ['/login', '/admin'];

  return (
    <Router>
      <RouteWrapper authToken={authToken} setAuthToken={setAuthToken} noHeaderRoutes={noHeaderRoutes} />
    </Router>
  );
}

function RouteWrapper({ authToken, setAuthToken, noHeaderRoutes }) {
  const location = useLocation();

  return (
    <div className="font-sans text-gray-800">
      {/* Conditionally render Header only if not on restricted routes */}
      {!noHeaderRoutes.includes(location.pathname) && <Header />}

      <main className="pt-8">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
          <Route
            path="/admin"
            element={authToken ? <Admin /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
