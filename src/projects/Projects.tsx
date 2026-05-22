import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react"
import { ProjectCard } from "../Admin/Projects/ProjectCard"
import ViewProjectDetail from "./ViewProjectDetail"
import { Search } from "lucide-react"
import useProjectsStore from "../../src/zustand/UseProjectsStore"


export interface ProjectSection {
  id: string
  title: string
  content: string
}

export interface VolunteerOpportunity {
  id: string
  title: string
  description: string
}

export interface Project {
  id: string
  name: string
  subtitle: string
  description: string
  leader: string
  leaderRole: string
  location: string
  coverImage: string
  status: "active" | "paused" | "completed"
  beneficiaries: number
  establishedYear: number
  sections: ProjectSection[]
  volunteerOpportunities: VolunteerOpportunity[]
  tags: string[]
  contactEmail?: string
  website?: string
  createdAt: string
  updatedAt: string
}

function Projects() {
  const { Allprojects, loadingProjects, fetchProjects } = useProjectsStore()
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // fetch projects once
  useEffect(() => {
    fetchProjects()
  }, [])

  // sync Zustand projects to local state and map _id -> id
  useEffect(() => {
    const mappedProjects = Allprojects.map((p: any) => ({
      ...p,
      id: p._id || p.id,
    }))
    setProjects(mappedProjects)
  }, [Allprojects])

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.leader.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  // View project
  const handleViewProject = (project: Project) => {
    setSelectedProject(project)
  }


  // Navigation
  const handleCloseModal = () => {
    setSelectedProject(null)
  }





  if (loadingProjects) {
    return (
      <div className="justify-center items-center py-32 mt-28 text-center mx-auto">

        <div className="mx-auto w-10 h-10 border-4 border-gray-300 border-t-[#F63049] rounded-full animate-spin"></div>
        <div className="mx-auto text-gray-500 mt-2">Loading projects...</div>
      </div>
    )
  }

  // GRID VIEW
  return (
    <>
      <div className="space-y-6 mt-[115px] lg:mx-10 mx-2">
        {/* Filters */}
        <div className="flex justify-center pt-5">
          <div className="relative lg:w-1/2 w-full ">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

            <input
              placeholder="Search projects by name, description or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-lg outline-1 outline-gray-300/20"
            />
          </div>
        </div>

        {/* Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            No projects found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleViewProject(project)}
              />
            ))}
          </div>
        )}
      </div>

      {/* PROJECT DETAIL MODAL */}
      <Dialog
        open={!!selectedProject}
        onClose={handleCloseModal}
        className="relative z-50"
      >
        {/* lighter overlay */}
        <div className="fixed inset-0 bg-black/80 backdrop-blur-[1px]" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel
            className="
        w-full
        max-w-6xl
        h-[90vh]
        overflow-hidden
        rounded-md
        bg-white dark:bg-[#0b1220]
        shadow-2xl
        border border-gray-200/20
      "
          >
            {/* close button */}
            <button
              onClick={handleCloseModal}
              className="
          absolute top-3 right-3 z-50
          w-9 h-9 rounded-full
          bg-black/40 text-white
          hover:bg-[#F63049]
          transition
        "
            >
              ✕
            </button>

            <div className="h-full overflow-y-auto">
              {selectedProject && (
                <ViewProjectDetail
                  project={selectedProject}
                  onBack={handleCloseModal}
                />
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default Projects