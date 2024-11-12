import React, { useEffect, useState } from 'react';
import Font from 'react-font';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger the animation on mount
  }, []);

  return (
    <Font family="Lato">
      <section className={`flex flex-col items-center p-8 pt-20 text-center ${isVisible ? 'animate-fadeInSlideUp' : ''}`}>
        <h2 className="text-xl font-semibold mb-8">CONTACT</h2>
        <div className="space-y-2 text-gray-700">
          <p className="font-medium">Younes Abdeljalil Architect - YAA</p>
          <br />
          <a
            href="https://www.google.com/maps/dir//Younes+Abdeljalil+Architecte+-+YAA+Avis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd7865e878b24477:0x76dab8f2c1981602?sa=X&ved=1t:3061&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:underline"
          >
            Etage 1, Imm. Al Mouhandissine, Rue Ibn Rochd
          </a>
          <br />
          <a
            href="https://www.google.com/maps/dir//Younes+Abdeljalil+Architecte+-+YAA+Avis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd7865e878b24477:0x76dab8f2c1981602?sa=X&ved=1t:3061&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:underline"
          >
            Oujda 60000, Morocco
          </a>
          <br />
          <p className="text-sm text-gray-500">T. (+212) 690508583</p>
          <p className="text-sm text-gray-500">Email: abdelyou28@gmail.com</p>
        </div>
        <br />
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/yaarchitecte/?hl=fr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl text-gray-500" />
          </a>
          <a href="https://www.linkedin.com/in/younes-abdeljalil-347984147/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl text-gray-500" />
          </a>
        </div>
      </section>
    </Font>
  );
};

export default Contact;
