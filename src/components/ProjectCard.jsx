import React, { useState } from 'react';

const ProjectCard = ({ image, title, description, link }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      <img src={image} alt={title} className="rounded-t-lg w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">
          {showFullDescription ? description : description.slice(0, 100) + '...'}
        </p>
        <button
          onClick={handleToggleDescription}
          className="border border-blue-900 text-blue-900 bg-white hover:border-transparent hover:bg-blue-100 hover:text-blue-900 mt-4 inline-block px-4 py-2 rounded transition-all duration-300"
        >
          {showFullDescription ? 'Show Less' : 'View More'}
        </button>
        
      </div>
    </div>
  );
};

export default ProjectCard;