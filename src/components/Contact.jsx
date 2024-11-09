import React, { useEffect, useState } from 'react';
import Font from 'react-font';
import { useLanguage } from './Language';

// Define translations
const translations = {
  EN: {
    contactTitle: 'CONTACT',
    name: 'Younes Abdeljalil Architect - YAA',
    address: 'Etage 1, Imm. Al Mouhandissine, Rue Ibn Rochd',
    city: 'Oujda 60000, Morocco',
    phone: 'T. (+212) 0690508583',
    email: 'Email: younes@gmail.com',
  },
  FR: {
    contactTitle: 'CONTACT',
    name: 'Younes Abdeljalil Architecte - YAA',
    address: 'Etage 1, Immeuble Al Mouhandissine, Rue Ibn Rochd',
    city: 'Oujda 60000, Maroc',
    phone: 'T. (+212) 0690508583',
    email: 'Email: younes@gmail.com',
  },
  AR: {
    contactTitle: 'اتصل',
    name: 'يونس عبد الجليل مهندس معماري - YAA',
    address: 'الطابق 1، عمارة المهندسين، شارع ابن رشد',
    city: 'وجدة 60000، المغرب',
    phone: '0ت. (+212) 690508583',
    email: 'البريد الإلكتروني: younes@gmail.com',
  },
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage(); // Get the current language from context

  useEffect(() => {
    setIsVisible(true); // Trigger the animation on mount
  }, []);

  return (
    <Font family="Lato">
      <section className={`flex flex-col items-center p-8 pt-20 text-center ${isVisible ? 'animate-fadeInSlideUp' : ''}`}>
        <h2 className="text-xl font-semibold mb-8">{translations[language].contactTitle}</h2>
        <div className="space-y-2 text-gray-700">
          <p className="font-medium">{translations[language].name}</p>
          <br />
          <a
            href="https://www.google.com/maps/dir//Younes+Abdeljalil+Architecte+-+YAA+Avis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd7865e878b24477:0x76dab8f2c1981602?sa=X&ved=1t:3061&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:underline"
          >
            {translations[language].address}
          </a>
          <br />
          <a
            href="https://www.google.com/maps/dir//Younes+Abdeljalil+Architecte+-+YAA+Avis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd7865e878b24477:0x76dab8f2c1981602?sa=X&ved=1t:3061&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:underline"
          >
            {translations[language].city}
          </a>
          <br />
          <p className="text-sm text-gray-500">{translations[language].phone}</p>
          <p className="text-sm text-gray-500">{translations[language].email}</p>
        </div>
      </section>
    </Font>
  );
};

export default Contact;
