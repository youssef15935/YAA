import React, { useEffect, useState } from 'react';
import Font from 'react-font';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { id } = useParams(); // Récupère l'ID du projet depuis l'URL
  const [project, setProject] = useState(null); // Projet à afficher
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'affichage
    setIsVisible(true);

    // Requête pour obtenir les détails du projet depuis le backend
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(response.data); // Stocke les données du projet dans le state
        console.log("Projet récupéré :", response.data); // Pour vérifier les données
      } catch (error) {
        console.error("Erreur lors de la récupération du projet :", error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) return <p>Chargement des détails du projet...</p>;

  return (
    <Font family="Lato">
      <div className={`flex flex-col items-center p-8 ${isVisible ? 'animate-fadeInSlideUp' : ''}`}>
        <img 
          src={`http://localhost:5000${project.src}`} 
          alt={project.title} 
          className="w-full max-w-md h-auto object-cover mb-4 shadow-md" 
        />
        <h2 className="text-xl mb-2 text-center">{project.title}</h2>
        <p className="text-center text-sm">{project.description}</p>
      </div>
    </Font>
  );
};

export default Details;
