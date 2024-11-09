import React, { useEffect, useState } from 'react';
import younesImage from '../assets/younes.png';
import Font from 'react-font';
import { useLanguage } from './Language'; // Import language context

// Define translations for profile text
const translations = {
  EN: {
    title: 'Younes Abdeljalil,',
    intro: 'Younes Abdeljalil is a creative and passionate architect based in Oujda, Morocco. With a deep commitment to innovative design and functionality, Younes has developed a unique architectural perspective that blends modern concepts with cultural heritage.',
    education: 'A graduate of the University of Architecture in Iași, Romania, Younes’s education laid the foundation for his architectural philosophy. His studies abroad provided him with a global perspective on architecture, shaping his approach to creating spaces that are both aesthetically pleasing and deeply rooted in their environment.',
    career: 'Returning to Oujda, Younes continues to infuse his work with creativity, exploring new materials and techniques while respecting traditional architectural principles. He views architecture as an evolving craft, one that requires constant learning and adaptation to meet the needs of the modern world.',
    vision: 'Younes is dedicated to creating livable spaces that harmonize with their surroundings, embodying his vision of architecture as a service to humanity and the environment.',
  },
  FR: {
    title: 'Younes Abdeljalil,',
    intro: 'Younes Abdeljalil est un architecte créatif et passionné basé à Oujda, au Maroc. Avec un profond engagement envers le design innovant et la fonctionnalité, Younes a développé une perspective architecturale unique qui combine des concepts modernes avec le patrimoine culturel.',
    education: "Diplômé de l'Université d'Architecture de Iași, en Roumanie, les études de Younes ont jeté les bases de sa philosophie architecturale. Ses études à l'étranger lui ont donné une perspective globale sur l'architecture, façonnant son approche pour créer des espaces à la fois esthétiquement plaisants et profondément enracinés dans leur environnement.",
    career: "De retour à Oujda, Younes continue d'insuffler de la créativité dans son travail, en explorant de nouveaux matériaux et techniques tout en respectant les principes architecturaux traditionnels. Il voit l'architecture comme un métier en évolution, nécessitant un apprentissage constant et une adaptation pour répondre aux besoins du monde moderne.",
    vision: "Younes est dédié à créer des espaces habitables qui s'harmonisent avec leur environnement, incarnant sa vision de l'architecture comme un service à l'humanité et à l'environnement.",
  },
  AR: {
    title: ',يونس عبد الجليل',
    intro: 'يونس عبد الجليل هو مهندس معماري مبدع ومتحمس مقيم في وجدة، المغرب. مع التزام عميق بالتصميم المبتكر والوظيفية، طور يونس منظورًا معماريًا فريدًا يمزج بين المفاهيم الحديثة والتراث الثقافي.',
    education: 'خريج جامعة العمارة في ياش، رومانيا، وضعت دراسات يونس الأساس لفلسفته المعمارية. قدمت دراسته في الخارج له منظورًا عالميًا حول العمارة، مما شكّل نهجه في خلق مساحات تجمع بين الجمال والجذور العميقة في بيئتها.',
    career: 'عائدًا إلى وجدة، يواصل يونس إضفاء الإبداع على عمله، مستكشفًا مواد وتقنيات جديدة مع احترام المبادئ المعمارية التقليدية. يرى العمارة كمهنة متطورة تتطلب التعلم المستمر والتكيف لتلبية احتياجات العالم الحديث.',
    vision: 'يونس مكرس لخلق مساحات صالحة للسكن تتناغم مع محيطها، مجسدًا رؤيته للعمارة كخدمة للإنسانية والبيئة.',
  },
};

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage(); // Get the current language from context

  useEffect(() => {
    // Trigger the animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className={`flex flex-col items-center p-8 pt-20 md:pt-24 ${isVisible ? 'animate-fadeInSlideUp' : ''}`}>
      <Font family="Lato">
        <div className="flex flex-col md:flex-row md:items-start max-w-4xl w-full space-y-6 md:space-y-0 md:space-x-8">
          {/* Image on the right with color change on hover */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src={younesImage}
              alt="Younes Abdeljalil" 
              className="rounded-sm shadow-md w-full md:w-auto md:max-w-xs object-cover transition-all duration-500 filter grayscale hover:grayscale-0"
            />
          </div>
          
          {/* Text content on the left */}
          <div className="md:w-1/2 text-gray-500 space-y-4 text-justify ">
            <h2 className="text-lg font-semibold text-gray-700">{translations[language].title}</h2>
            <p>{translations[language].intro}</p>
            <p>{translations[language].education}</p>
            <p>{translations[language].career}</p>
            <p>{translations[language].vision}</p>
          </div>
        </div>
      </Font>
    </section>
  );
};

export default Profile;
