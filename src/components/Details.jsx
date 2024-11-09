import React, { useEffect, useState } from 'react';
import Font from 'react-font';
import { useParams } from 'react-router-dom';
import { useLanguage } from './Language';

// Define translations for images
const images = [
  {
    id: 1,
    src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg',
    alt: {
      EN: 'Project 1',
      FR: 'Projet 1',
      AR: 'المشروع 1',
    },
    description: {
      EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
      FR: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
      AR: 'لوريم ايبسوم دولار سيت أميت، كونسكتيتور أديبيسيسينغ إيليت. فيفاموس لاشينيا أوديو فيتاي فيستيبولوم فيستيبولوم.',
    },
  },
  {
    id: 2,
    src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg',
    alt: {
      EN: 'Project 2',
      FR: 'Projet 2',
      AR: 'المشروع 2',
    },
    description: {
      EN: 'Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo.',
      FR: 'Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo.',
      AR: 'كوريباتور أك ليو نونك. فيستيبولوم ايه ماريس فيل انتي فينيبوس ماكسموس نك أت ليو.',
    },
  },
  {
    id: 3,
    src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg',
    alt: {
      EN: 'Project 3',
      FR: 'Projet 3',
      AR: 'المشروع 3',
    },
    description: {
      EN: 'Suspendisse potenti. Morbi mattis urna at quam venenatis, sed volutpat erat facilisis.',
      FR: 'Suspendisse potenti. Morbi mattis urna at quam venenatis, sed volutpat erat facilisis.',
      AR: 'سبنديس بوتينتي. موربي ماتيس أورنا أت كوام فينيناتيس، سيد ولفوت ات ارات فاسيلسيس.',
    },
  },
  {
    id: 4,
    src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg',
    alt: {
      EN: 'Project 4',
      FR: 'Projet 4',
      AR: 'المشروع 4',
    },
    description: {
      EN: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
      FR: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
      AR: 'نولام كويز ريسوس ايجيت اورنا موليس اورني فيل ايو ليو.',
    },
  },
  {
    id: 5,
    src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg',
    alt: {
      EN: 'Project 5',
      FR: 'Projet 5',
      AR: 'المشروع 5',
    },
    description: {
      EN: 'Etiam porta sem malesuada magna mollis euismod.',
      FR: 'Etiam porta sem malesuada magna mollis euismod.',
      AR: 'اتيام بورتا سيم ماليسودا ماقنا موليس اوسمود.',
    },
  },
  {
    id: 6,
    src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg',
    alt: {
      EN: 'Project 6',
      FR: 'Projet 6',
      AR: 'المشروع 6',
    },
    description: {
      EN: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      FR: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      AR: 'كراس جوستو اوديو، دابيبوس اك فاسيلسيس ان، ايجيستاس ايجيت كوام.',
    },
  },
  {
    id: 7,
    src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg',
    alt: {
      EN: 'Project 7',
      FR: 'Projet 7',
      AR: 'المشروع 7',
    },
    description: {
      EN: 'Vestibulum id ligula porta felis euismod semper.',
      FR: 'Vestibulum id ligula porta felis euismod semper.',
      AR: 'فيستيبولوم آيد ليقولا بورتا فيلس اوسمود سيمبر.',
    },
  },
  {
    id: 8,
    src: 'https://davidchipperfield.com/media/Projects/1625-K-Project/1625-dca-k-project-model-photograph.jpg',
    alt: {
      EN: 'Project 8',
      FR: 'Projet 8',
      AR: 'المشروع 8',
    },
    description: {
      EN: 'Donec ullamcorper nulla non metus auctor fringilla.',
      FR: 'Donec ullamcorper nulla non metus auctor fringilla.',
      AR: 'دونك اللامكوربر نولا نون متوس اوكتور فرينجيلا.',
    },
  },
];

const Details = () => {
  const { id } = useParams();
  const image = images.find(img => img.id === parseInt(id));
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage(); // Get the current language from context

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!image) return <p>Image not found</p>;

  return (
    <Font family="Lato">
      <div className={`flex flex-col items-center p-8 ${isVisible ? 'animate-fadeInSlideUp' : ''}`}>
        <img src={image.src} alt={image.alt[language]} className="w-full max-w-md h-auto object-cover mb-4 shadow-md" />
        <h2 className="text-xl mb-2 text-center">{image.alt[language]}</h2>
        <p className="text-center text-sm">{image.description[language]}</p>
      </div>
    </Font>
  );
};

export default Details;
