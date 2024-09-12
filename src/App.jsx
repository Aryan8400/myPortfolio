import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import About from './components/About';

const projects = [
  {
    image: './public/image/project1.jpeg',
    title: 'Online Learning Platform',
    description: 'A web application that provides a platform for instructors to create and manage courses, while students can enroll, access learning materials, and track their progress. Features include user authentication, course creation tools, payment integration, and a responsive design.',
    link: '#'
  },
  {
    image: './src/image/project2.jpeg',
    title: 'E-Commerce Web Application',
    description: 'A full-featured e-commerce platform where users can browse products, add them to a cart, and complete purchases. Includes product search, filters, user authentication, order management, and payment gateway integration using modern frameworks like React or Angular.',
    link: '#'
  },
  {
    image: './src/image/project3.jpeg',
    title: ' Task Management System',
    description: 'A web-based task management application for teams to create, assign, and manage tasks collaboratively. It features task categorization, priority settings, deadlines, real-time updates, and a Kanban board view.',
    link: '#'
  },
  {
    image: './src/image/project4.jpg',
    title: 'Real-Time Chat Application',
    description: 'A real-time chat application using WebSocket or WebRTC that supports group chats, private messages, file sharing, and user presence indicators. Built with React, Node.js, and MongoDB..',
    link: '#'
  },
  {
    image: './src/image/project5.png',
    title: 'Weather Forecast App',
    description: 'TA weather forecasting application that provides current weather, hourly forecasts, and 7-day forecasts for any location. Integrates with external APIs like OpenWeatherMap, offering features like weather maps and location-based services.',
    link: '#'
  },
  {
    image: './src/image/project6.jpeg',
    title: 'Movie Recommendation Systemect 6',
    description: 'A movie recommendation engine that uses collaborative filtering, content-based filtering, or hybrid methods to suggest movies based on user preferences and viewing history. Built using Python and machine learning libraries. ',
    link: '#'
  },
 
];

const App = () => (
  <div>
    <Header />
    <About />
    <section id="projects" className="p-5 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-5 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
    <Contact />
  </div>
);

export default App;
