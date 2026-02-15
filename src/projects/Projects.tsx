import { useState, useEffect } from "react";
import Header from "../components/Header"
import ProjectCard from "./ProjectCard"
import ProjectDetails from "./ProjectDetails";
import useProjectsStore from "../zustand/UseProjectsStore";

export interface Project {
  _id?: string;
  projectImage?: string;
  title: string;
  summary: string;
}


function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchProjects, loadingProjects, projects } = useProjectsStore();
  // Fetch projects when the component mounts
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);


  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };


  return (
    <div>
      <Header pageName="Our Projects" />
      <div className="grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {loadingProjects ? (
          <div className="flex justify-center py-10">
            <span className="loading loading-spinner loading-lg" />
            <p className="ml-4 text-lg">Loading projects...</p>
          </div>
        ) : (
          projects.length === 0 ? (
            <p>No projects available.</p>
          ) : null
        )}
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectImage={project.projectImage}
            title={project.title}
            summary={project.summary}
            onLearnMore={() => openModal(project)}
          />
        ))}
      </div>
      {/* popup modal   */}
      {isModalOpen && selectedProject && (
        <ProjectDetails
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </div>
  )
}

export default Projects