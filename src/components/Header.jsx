import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './Language';
import Font from 'react-font';

const Header = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <header className="flex flex-col items-center p-4 border-b border-gray-200">
      <Link to="/" className="text-2xl font-light mb-2">YAA</Link>
      <Font family="Lato">
        <nav className="flex space-x-4 text-gray-600">
          <Link to="/">{language === 'EN' ? 'Home' : language === 'FR' ? 'Accueil' : 'الصفحة الرئيسية'}</Link>
          <Link to="/profile">{language === 'EN' ? 'Profile' : language === 'FR' ? 'Profil' : 'الملف الشخصي'}</Link>
          <Link to="/contact">{language === 'EN' ? 'Contact' : language === 'FR' ? 'Contact' : 'اتصل'}</Link>
        </nav>
      </Font>

      {/* Language Selection */}
      <div className="mt-4 flex space-x-4 text-gray-500">
        <button onClick={() => changeLanguage('EN')} className={language === 'EN' ? 'font-semibold' : ''}>EN</button>
        <button onClick={() => changeLanguage('FR')} className={language === 'FR' ? 'font-semibold' : ''}>FR</button>
        <button onClick={() => changeLanguage('AR')} className={language === 'AR' ? 'font-semibold' : ''}>AR</button>
      </div>
    </header>
  );
};

export default Header;
