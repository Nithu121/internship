import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Travel Agency Website",
      description: "A dynamic travel booking site with React.",
    },
    {
      title: "Portfolio Website",
      description: "A showcase of my skills and projects.",
    },
    {
      title: "E-commerce App",
      description: "A full-stack shopping application with React and Node.js.",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
