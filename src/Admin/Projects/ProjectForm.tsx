import { useState } from "react";
import axios from "axios"
const url = import.meta.env.VITE_SERVER_URL || "http://localhost:8050"
import { ArrowLeft, Plus, Trash2, Save, GripVertical, X, ChevronDown, } from "lucide-react"


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

interface Project {
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

interface ProjectFormProps {
  project?: Project | null
  onCancel: () => void
  onSave?: (project: Project) => void
}

function ProjectForm({ project, onCancel, onSave }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    name: project?.name || "",
    subtitle: project?.subtitle || "",
    description: project?.description || "",
    leader: project?.leader || "",
    leaderRole: project?.leaderRole || "",
    location: project?.location || "",
    coverImage: project?.coverImage || "",
    status: project?.status || "active" as const,
    beneficiaries: project?.beneficiaries || 0,
    establishedYear: project?.establishedYear || new Date().getFullYear(),
    contactEmail: project?.contactEmail || "",
    website: project?.website || "",
  })

  const [sections, setSections] = useState<ProjectSection[]>(
    project?.sections || []
  )

  const [volunteerOpportunities, setVolunteerOpportunities] = useState<VolunteerOpportunity[]>(
    project?.volunteerOpportunities || []
  )

  const [tags, setTags] = useState<string[]>(project?.tags || [])
  const [newTag, setNewTag] = useState("")

  // Handle basic field changes
  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Section management
  const addSection = () => {
    setSections((prev) => [
      ...prev,
      { id: `s${Date.now()}`, title: "", content: "" },
    ])
  }

  const updateSection = (id: string, field: "title" | "content", value: string) => {
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    )
  }

  const removeSection = (id: string) => {
    setSections((prev) => prev.filter((s) => s.id !== id))
  }

  // Volunteer opportunity management
  const addVolunteerOpportunity = () => {
    setVolunteerOpportunities((prev) => [
      ...prev,
      { id: `v${Date.now()}`, title: "", description: "" },
    ])
  }

  const updateVolunteerOpportunity = (
    id: string,
    field: "title" | "description",
    value: string
  ) => {
    setVolunteerOpportunities((prev) =>
      prev.map((v) => (v.id === id ? { ...v, [field]: value } : v))
    )
  }

  const removeVolunteerOpportunity = (id: string) => {
    setVolunteerOpportunities((prev) => prev.filter((v) => v.id !== id))
  }

  // Tag management
  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags((prev) => [...prev, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag))
  }

  // Submit form
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const form = new FormData()

    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, String(value))
    })

    form.append(
      "sections",
      JSON.stringify(
        sections.map(({ title, content }) => ({
          title,
          content,
        }))
      )
    )

    form.append(
      "volunteerOpportunities",
      JSON.stringify(
        volunteerOpportunities.map(({ title, description }) => ({
          title,
          description,
        }))
      )
    )

    form.append("tags", JSON.stringify(tags))

    const imageInput = document.getElementById(
      "coverImage"
    ) as HTMLInputElement

    if (imageInput?.files?.[0]) {
      form.append("coverImage", imageInput.files[0])
    }

    let response

    //EDIT PROJECT
    if (project?.id) {
      response = await axios.put(
        `${url}/api/admin/edit/project/${project.id}`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
    }

    //CREATE PROJECT
    else {
      response = await axios.post(`${url}/api/admin/projects`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    }

    if (response.status === 200 || response.status === 201) {
      alert(project ? "Project updated successfully!" : "Project created successfully!")

      if (onSave) {
        onSave(response.data.project)
      }

      onCancel()
    }
  } catch (error) {
    console.error(error)
    alert("Failed to save project")
  }
}

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Cancel
        </button>
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
        >
          <Save className="w-4 h-4" />
          {project ? "Update Project" : "Create Project"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-card border border-border rounded-xl">
            <div className="p-5 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Basic Information</h2>
              <p className="text-sm text-muted-foreground mt-1">Enter the main details about the project</p>
            </div>
            <div className="p-5 space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Project Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="e.g., Msamaria Children's Home"
                  required
                  className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subtitle" className="block text-sm font-medium text-foreground">
                  Subtitle / Tagline
                </label>
                <input
                  id="subtitle"
                  type="text"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => handleChange("subtitle", e.target.value)}
                  placeholder="e.g., A Home for Healing, Learning, and Growth"
                  className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-foreground">
                  Description *
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  name="description"
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Write a comprehensive description of the project..."
                  rows={5}
                  required
                  className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="leader" className="block text-sm font-medium text-foreground">
                    Project Leader *
                  </label>
                  <input
                    id="leader"
                    type="text"
                    value={formData.leader}
                    name="leader"
                    onChange={(e) => handleChange("leader", e.target.value)}
                    placeholder="e.g., Mapunda"
                    required
                    className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="leaderRole" className="block text-sm font-medium text-foreground">
                    Leader Role
                  </label>
                  <input
                    id="leaderRole"
                    type="text"
                    name="leaderRole"
                    value={formData.leaderRole}
                    onChange={(e) => handleChange("leaderRole", e.target.value)}
                    placeholder="e.g., Home Director"
                    className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="location" className="block text-sm font-medium text-foreground">
                    Location *
                  </label>
                  <input
                    id="location"
                    type="text"
                    value={formData.location}
                    name="location"
                    onChange={(e) => handleChange("location", e.target.value)}
                    placeholder="e.g., Moshi, Tanzania"
                    required
                    className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="status" className="block text-sm font-medium text-foreground">
                    Status
                  </label>
                  <div className="relative">
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={(e) => handleChange("status", e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    >
                      <option value="active">Active</option>
                      <option value="paused">Paused</option>
                      <option value="completed">Completed</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="beneficiaries" className="block text-sm font-medium text-foreground">
                    Number of Beneficiaries
                  </label>
                  <input
                    id="beneficiaries"
                    type="number"
                    name="beneficiaries"
                    value={formData.beneficiaries}
                    onChange={(e) => handleChange("beneficiaries", parseInt(e.target.value) || 0)}
                    min={0}
                    className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="establishedYear" className="block text-sm font-medium text-foreground">
                    Year Established
                  </label>
                  <input
                    id="establishedYear"
                    type="number"
                    name="establishedYear"
                    value={formData.establishedYear}
                    onChange={(e) => handleChange("establishedYear", parseInt(e.target.value) || new Date().getFullYear())}
                    min={1900}
                    max={new Date().getFullYear()}
                    className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Sections */}
          <div className="bg-card border border-border rounded-xl">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Content Sections</h2>
                <p className="text-sm text-muted-foreground mt-1">Add custom sections with any content (education info, history, impact, etc.)</p>
              </div>
              <button
                type="button"
                onClick={addSection}
                className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-foreground border border-border hover:bg-secondary rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Section
              </button>
            </div>
            <div className="p-5 space-y-4">
              {sections.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground border border-dashed border-border rounded-lg">
                  <p>No sections added yet</p>
                  <p className="text-sm">Click &quot;Add Section&quot; to add custom content</p>
                </div>
              ) : (
                sections.map((section, index) => (
                  <div
                    key={section.id || index}
                    className="p-4 border border-border rounded-lg bg-card/50 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <GripVertical className="w-4 h-4" />
                        <span className="text-sm font-medium">Section {index + 1}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeSection(section.id)}
                        className="p-1.5 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={section.title}
                      onChange={(e) => updateSection(section.id, "title", e.target.value)}
                      placeholder="Section Title (e.g., Education Program, Our Impact)"
                      className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                    <textarea
                      value={section.content}
                      onChange={(e) => updateSection(section.id, "content", e.target.value)}
                      placeholder="Section content..."
                      rows={4}
                      className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Volunteer Opportunities */}
          <div className="bg-card border border-border rounded-xl">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Volunteer Opportunities</h2>
                <p className="text-sm text-muted-foreground mt-1">Add ways people can volunteer or help with this project</p>
              </div>
              <button
                type="button"
                onClick={addVolunteerOpportunity}
                className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-foreground border border-border hover:bg-secondary rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Opportunity
              </button>
            </div>
            <div className="p-5 space-y-4">
              {volunteerOpportunities.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground border border-dashed border-border rounded-lg">
                  <p>No volunteer opportunities added yet</p>
                </div>
              ) : (
                volunteerOpportunities.map((opp, index) => (
                  <div
                    key={opp.id || index}
                    className="p-4 border border-border rounded-lg bg-card/50 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        Opportunity {index + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeVolunteerOpportunity(opp.id)}
                        className="p-1.5 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={opp.title}
                      onChange={(e) => updateVolunteerOpportunity(opp.id, "title", e.target.value)}
                      placeholder="Title (e.g., Teaching and Mentoring)"
                      className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                    <textarea
                      value={opp.description}
                      onChange={(e) => updateVolunteerOpportunity(opp.id, "description", e.target.value)}
                      placeholder="Description of the volunteer role..."
                      rows={2}
                      className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tags */}
          <div className="bg-card border border-border rounded-xl">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold text-foreground">Tags / Categories</h3>
              <p className="text-xs text-muted-foreground mt-1">Add tags to help categorize this project</p>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a tag..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      addTag()
                    }
                  }}
                  className="flex-1 px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-3 py-2 text-sm font-medium text-foreground border border-border hover:bg-secondary rounded-lg transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-0.5 hover:text-red-500 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              {tags.length === 0 && (
                <p className="text-xs text-muted-foreground">
                  Suggested: Children, Education, Healthcare, Sports, Technology
                </p>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-card border border-border rounded-xl">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold text-foreground">Contact Information</h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <label htmlFor="contactEmail" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={(e) => handleChange("contactEmail", e.target.value)}
                  placeholder="project@example.org"
                  className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="website" className="block text-sm font-medium text-foreground">
                  Website URL
                </label>
                <input
                  id="website"
                  type="url"
                  value={formData.website}
                  name="website"
                  onChange={(e) => handleChange("website", e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="bg-card border border-border rounded-xl">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold text-foreground">Cover Image</h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <label htmlFor="coverImage" className="block text-sm font-medium text-foreground">
                  Image URL
                </label>
                <input
                  id="coverImage"
                  type="file"
                  onChange={(e) => handleChange("coverImage", e.target.value)}
                  placeholder="/images/projects/example.jpg"
                  className="w-full px-3 py-2 text-sm bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
              <div className="h-32 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                {formData.coverImage ? "Image preview" : "No image set"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ProjectForm;