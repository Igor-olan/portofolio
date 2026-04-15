// import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Elist API",
      desc: "REST API untuk manajemen board, list, dan card dengan autentikasi user.",
    },
    {
      name: "Task Manager API",
      desc: "API sederhana untuk CRUD task dengan struktur database yang rapi dan scalable.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          My Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;