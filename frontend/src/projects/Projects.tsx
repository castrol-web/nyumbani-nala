import { useState } from "react";
import Header from "../components/Header"
import ProjectCard from "./ProjectCard"
import msamaria from "../assets/msamaria.jpg";
import childrenofdestiny from "../assets/childrenofdestiny.jpg";
import ProjectDetails from "./ProjectDetails"

interface Project {
  projectImage: string;
  title: string;
  summary: string;
}


function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const projectsData = [
    {
      projectImage: msamaria,
      sponsors:["Mary Smith Foundation","Global Aid Org"],
      requirements: ["Food Supplies", "Building materials","Clothes for the kids","Transport", "Educational Materials"],
      title: "Msamaria Children's Home",
      address: "123 Main Street, City, Country",
      goals:["Provide essential resources to underprivileged communities.","Empower individuals through education and skills training.","Foster long-term sustainability in local communities."],
      year: 2018,
      contact: [{ phone: "+1234567890", email: "example@gmail.com" }],
      teamMembers: [{ name: "Margaret Umburi", role: "Founder" }],
      summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
      projectImage: childrenofdestiny,
      sponsors:["Marisa Diaz Foundation","Helping Hands Intl"],
      requirements: ["Food Supplies", "Clothing","Utility bills to be paid","Busfare transport","Salaries for the staffs", "Educational Materials"],
      address: "24 Mbita,Kisumu, Kenya",
      goals:["Empower individuals through education and skills training.","Foster long-term sustainability in local communities."],
      year: 2020,
      contact: [{ phone: "+1234567890", email: "example@gmail.com" }],
      title: "Children of Destiny",
      teamMembers: [{ name: "Gideon", role: "Coordinator" }],
      summary: "At vero eos et accusamus et iusto odio dignissimos Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
      projectImage: msamaria,
      sponsors:["Nyumba Ninala","Community Care Org"],
      requirements: ["Food Supplies", "Clothing", "Educational Materials","Learning materials","House rent"],
      address: "134 Soweto,Moshi, Tanzania",
      goals:["Empower individuals through education and skills training.","Provide essential resources to underprivileged communities.","Foster long-term sustainability in local communities."],
      year: 2016,
      contact: [{ phone: "+1234567890", email: "example@gmail.com" }],
      title: "Delight Niche",
      teamMembers: [{ name: "Alex", role: "Manager" }],
      summary: "Quod maxime placeat facere possimusSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
      projectImage: msamaria,
      sponsors:["Sunshine Foundation","Global Hope Org"],
      requirements: ["Food Supplies", "Clothing", "Educational Materials","medical supplies"],
      address: "0007 Juja,Nairobi, Kenya",
      goals:["Empower individuals through education and skills training.","Foster long-term sustainability in local communities.","Provide essential resources to underprivileged communities."],
      year: 2024,
      contact: [{ phone: "+1234567890", email: "example@gmail.com" }],
      title: "Eva's Project",
      teamMembers: [{ name: "John", role: "Lead" }],
      summary: "Ut enim ad minima veniam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
  ];
  return (
    <div>
      <Header pageName="Our Projects" />
      <div className="grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {projectsData.map((project, index) => (
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