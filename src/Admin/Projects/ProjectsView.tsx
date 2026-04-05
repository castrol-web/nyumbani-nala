import { useEffect, useState } from "react"
import axios from "axios"
const url = import.meta.env.VITE_SERVER_URL || "http://localhost:8050"
import { ProjectCard } from "./ProjectCard"
import { ProjectDetail } from "./ProjectDetail"
import ProjectForm from "./ProjectForm"
import { Plus, Search, ChevronDown, X } from "lucide-react"
import useProjectsStore from "../../zustand/UseProjectsStore"

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

function ProjectsView() {
  const { Allprojects, fetchProjects } = useProjectsStore()

  const [projects, setProjects] = useState<Project[]>([])

  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null)

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

    const matchesStatus =
      statusFilter === "all" || project.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // View project
  const handleViewProject = (project: Project) => {
    setSelectedProject(project)
    setViewMode("detail")
  }

  // New project
  const handleNewProject = () => {
    setSelectedProject(null)
    setViewMode("form")
  }

  // Edit project
  const handleEditProject = () => {
    setViewMode("form")
  }


  // Delete
  const handleDeleteClick = () => {
    setProjectToDelete(selectedProject)
    setDeleteDialogOpen(true)
  }

const confirmDelete = async () => {
  if (!projectToDelete) return;

  try {
    await axios.delete(`${url}/api/admin/delete/project/${projectToDelete.id}`);

    setProjects((prev) =>
      prev.filter((p) => p.id !== projectToDelete.id)
    );

    setSelectedProject(null);
    setViewMode("grid");

  } catch (error) {
    console.error(error);
    alert("Failed to delete project");
  }

  setDeleteDialogOpen(false);
  setProjectToDelete(null);
};

  // Navigation
  const handleBackToGrid = () => {
    setSelectedProject(null)
    setViewMode("grid")
  }

  const handleCancelForm = () => {
    if (selectedProject) {
      setViewMode("detail")
    } else {
      setViewMode("grid")
    }
  }

  // FORM VIEW
 if (viewMode === "form") {
  return (
    <ProjectForm
      project={selectedProject}
      onCancel={handleCancelForm}
      onSave={(updatedProject) => {
        fetchProjects()
        setSelectedProject(updatedProject)
      }}
    />
  )
}

  // DETAIL VIEW
  if (viewMode === "detail" && selectedProject) {
    return (
      <>
        <ProjectDetail
          project={selectedProject}
          onBack={handleBackToGrid}
          onEdit={handleEditProject}
          onDelete={handleDeleteClick}
        />

        {deleteDialogOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setDeleteDialogOpen(false)}
            />

            <div className="relative bg-card border border-border rounded-xl p-6 w-full max-w-md mx-4 shadow-xl">
              <button
                onClick={() => setDeleteDialogOpen(false)}
                className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-xl font-semibold">Delete Project</h2>

              <p className="text-muted-foreground mt-2">
                Are you sure you want to delete "{projectToDelete?.name}"?
              </p>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setDeleteDialogOpen(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg"
                >
                  Delete Project
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  // GRID VIEW
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-muted-foreground">
            Manage all Nyumbani Nala projects
          </p>
        </div>

        <button
          onClick={handleNewProject}
          className="flex items-center gap-2 px-4 py-2 text-white bg-primary rounded-lg"
        >
          <Plus className="w-4 h-4" />
          Add New Project
        </button>
      </div>

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

        <div className="relative w-[180px]">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg appearance-none"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="completed">Completed</option>
          </select>

          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
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

export default ProjectsView