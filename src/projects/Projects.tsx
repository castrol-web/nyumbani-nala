import { useEffect, useState } from "react"
import { ProjectCard } from "../Admin/Projects/ProjectCard"
import ViewProjectDetail from "./ViewProjectDetail"
import {Search} from "lucide-react"
import useProjectsStore from "../../src/zustand/UseProjectsStore"

type ViewMode = "grid" | "detail" | "form"

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
  const { Allprojects, fetchProjects } = useProjectsStore()
  const [projects, setProjects] = useState<Project[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
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
    setViewMode("detail")
  }


  // Navigation
  const handleBackToGrid = () => {
    setSelectedProject(null)
    setViewMode("grid")
  }



  // DETAIL VIEW
  if (viewMode === "detail" && selectedProject) {
    return (
      <>
        <ViewProjectDetail
          project={selectedProject}
          onBack={handleBackToGrid}
        />
      </>
    )
  }

  // GRID VIEW
  return (
    <div className="space-y-6 mt-[115px]">
      {/* Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border rounded-lg"
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
  )
}

export default Projects