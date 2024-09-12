import React from 'react';

const About = () => (
  <section id="about" className="bg-white py-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-4 space-y-6 md:space-y-0 md:space-x-8">
      <div className="md:w-1/3 flex justify-center mb-5 md:mb-0">
        <img 
          src="/image/Aryan.jpg" 
          alt="Your Name" 
          className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover"
        />
      </div>
      <div className="md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 mb-4">
          Hello! I'm Aryan Jaiswal, a passionate frontend developer with expertise in HTML, CSS, JavaScript, and React.
          I'm currently pursuing a BSc Hons in Computing and looking for an internship to further develop my skills.
        </p>
        <p className="text-gray-600">
          I love building beautiful and functional web applications that provide great user experiences. When I'm not coding, I enjoy travelling with my friends.
        </p>
      </div>
    </div>
  </section>
);

export default About;