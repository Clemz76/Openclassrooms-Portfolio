import ProjectsCard from "./ProjectsCard";
import projects from "../../public/projects.json";
import ModalProject from "./ModalProject";
import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 400, once: true });
  }, []);

  const openModal = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const closeModal = () => {
    setSelectedProjectId(null);
  };

  const selectedProject = selectedProjectId
    ? projects.find((project) => project.id === selectedProjectId)
    : null;

  return (
    <div className="projects" id="projets">
      {selectedProject && (
        <ModalProject closeModal={closeModal} project={selectedProject} />
      )}
      <h2 className="projects__title">
        <span>&#47;&#47;</span> PROJETS
      </h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div
            className="cards__animation"
            key={project.id}
            data-aos="fade-down"
            data-aos-delay={index * 100}
          >
            <ProjectsCard
              cover={project.cover}
              title={project.title}
              coverDescription={project.coverDescription}
              openModal={() => openModal(project.id)}
              projectId={project.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
