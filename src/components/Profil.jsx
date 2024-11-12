import React, { useEffect, useState } from 'react';
import younesImage from '../assets/younes.png';
import Font from 'react-font';

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className={`flex flex-col items-center p-8 pt-20 md:pt-24 ${isVisible ? 'animate-fadeInSlideUp' : ''}`}>
      <Font family="Lato">
        <div className="flex flex-col md:flex-row md:items-start max-w-4xl w-full space-y-6 md:space-y-0 md:space-x-8">
          {/* Image on the right with color change on hover */}
          <div className="flex justify-center md:justify-end mt-2">
            <img 
              src={younesImage}
              alt="Younes Abdeljalil" 
              className="rounded-sm shadow-md w-full md:w-auto md:max-w-xs object-cover transition-all duration-500 filter grayscale hover:grayscale-0"
            />
          </div>
          
          {/* French text content */}
          <div className="text-gray-500 space-y-4 text-justify">
            <h2 className="text-lg font-semibold text-gray-700">Younes Abdeljalil,</h2>
            <p>Younes Abdeljalil est un architecte créatif et passionné basé à Oujda, au Maroc. Avec un profond engagement envers le design innovant et la fonctionnalité, Younes a développé une perspective architecturale unique qui combine des concepts modernes avec le patrimoine culturel.</p>
            <p>Diplômé de l'Université d'Architecture de Iași, en Roumanie, les études de Younes ont jeté les bases de sa philosophie architecturale. Ses études à l'étranger lui ont donné une perspective globale sur l'architecture, façonnant son approche pour créer des espaces à la fois esthétiquement plaisants et profondément enracinés dans leur environnement.</p>
            <p>De retour à Oujda, Younes continue d'insuffler de la créativité dans son travail, en explorant de nouveaux matériaux et techniques tout en respectant les principes architecturaux traditionnels. Il voit l'architecture comme un métier en évolution, nécessitant un apprentissage constant et une adaptation pour répondre aux besoins du monde moderne.</p>
            <p>Younes est dédié à créer des espaces habitables qui s'harmonisent avec leur environnement, incarnant sa vision de l'architecture comme un service à l'humanité et à l'environnement.</p>
          </div>
        </div>
      </Font>
    </section>
  );
};

export default Profile;
