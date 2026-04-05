import { MapPin, Users, Calendar, ArrowRight } from "lucide-react"

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

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const statusStyles = {
    active: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    paused: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    completed: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  }

  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
      onClick={onClick}
    >
      {/* Cover Image */}
      <div className="relative h-48 bg-linear-to-br from-primary/20 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-card/90 via-card/20 to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-primary/20">
            {project.name.charAt(0)}
          </div>
        </div>
        <span className={`absolute top-3 right-3 z-20 px-2.5 py-1 text-xs font-medium rounded-full capitalize ${statusStyles[project.status]}`}>
          {project.status}
        </span>
      </div>

      <div className="p-5">
        {/* Title & Subtitle */}
        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {project.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {project.subtitle}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>{project.beneficiaries} beneficiaries</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>Est. {project.establishedYear}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-normal rounded-md bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 text-xs font-normal rounded-md bg-secondary text-secondary-foreground">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Leader */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium text-sm">
              {project.leader.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{project.leader}</p>
              <p className="text-xs text-muted-foreground">{project.leaderRole}</p>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
          >
            View
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
