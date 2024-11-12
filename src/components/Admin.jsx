import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '' });
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Selected image file
  const navigate = useNavigate(); // Use navigate to redirect user

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des projets', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file)); // Preview the image
  };

  const handleAddProject = async () => {
    try {
      const formData = new FormData();
      formData.append('title', newProject.title);
      formData.append('description', newProject.description);
      formData.append('image', imageFile);

      await axios.post('http://localhost:5000/api/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setNewProject({ title: '', description: '' });
      setImagePreview(null);
      setImageFile(null);
      fetchProjects();
    } catch (error) {
      console.error("Erreur lors de l'ajout du projet", error);
    }
  };

  const handleUpdateProject = async (id, updatedProject) => {
    try {
      await axios.put(`http://localhost:5000/api/projects/${id}`, updatedProject);
      fetchProjects();
    } catch (error) {
      console.error('Erreur lors de la mise à jour du projet', error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.error('Erreur lors de la suppression du projet', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear authToken from local storage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Gestion des Projets</h2>
        <button
          onClick={handleLogout}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition"
        >
          Déconnexion
        </button>
      </div>

      <div className="bg-gray-100 p-4 rounded-md shadow-md mb-8">
        <h3 className="text-lg font-medium mb-4">Ajouter un Nouveau Projet</h3>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Titre"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            placeholder="Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          {imagePreview && <img src={imagePreview} alt="Prévisualisation" className="w-32 h-32 mt-2" />}
          <button
            onClick={handleAddProject}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Ajouter le Projet
          </button>
        </div>
      </div>

      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project._id} className="bg-white p-4 rounded-md shadow-md flex items-center justify-between">
            <div className="flex-grow">
              <input
                type="text"
                value={project.title}
                onChange={(e) =>
                  handleUpdateProject(project._id, { ...project, title: e.target.value })
                }
                className="p-2 border rounded-md w-full mb-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <img src={`http://localhost:5000${project.src}`} alt={project.title} className="w-24 h-24 object-cover" />
            </div>
            <button
              onClick={() => handleDeleteProject(project._id)}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
