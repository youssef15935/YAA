import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Font from 'react-font';

const Gallery = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://yaa-5geq.onrender.com/api/projects'); // Remplacez avec votre URL backend
        setProjects(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <Font family="Lato">
      <section className="flex justify-center p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <Link
              key={project._id}
              to={`/details/${project._id}`}
              className="relative bg-gray-100 overflow-hidden transform transition duration-300 hover:scale-102 hover:opacity-90 hover:filter-none filter grayscale group"
            >
             <img src={`https://yaa-5geq.onrender.com${project.src}`} alt={project.title} className="w-full h-full object-cover" />
            </Link>
          ))}
        </div>
      </section>
    </Font>
  );
};

export default Gallery;
