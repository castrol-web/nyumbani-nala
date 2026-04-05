import {
    ArrowLeft,
    MapPin,
    Users,
    Calendar,
    Mail,
    Globe,
    HandHeart,
} from "lucide-react"

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

interface ProjectDetailProps {
    project: Project
    onBack: () => void
}

function ViewProjectDetail({ project, onBack }: ProjectDetailProps) {
    const statusStyles = {
        active: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
        paused: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
        completed: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    }

    return (
        <div className="space-y-6 mt-[118px]">
            {/* header */}
            <div>
                <button
                    type="button"
                    onClick={onBack}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Projects
                </button>
            </div>

            {/* Hero Section */}
            <div className="relative rounded-xl overflow-hidden bg-linear-to-br from-primary/30 via-primary/10 to-secondary h-64">
                <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full capitalize mb-3 ${statusStyles[project.status]}`}>
                                {project.status}
                            </span>
                            <h1 className="text-3xl font-bold text-foreground">{project.name}</h1>
                            <p className="text-lg text-muted-foreground mt-1">{project.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-3 bg-card/80 backdrop-blur rounded-lg p-3">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                {project.leader.charAt(0)}
                            </div>
                            <div>
                                <p className="font-medium text-foreground">{project.leader}</p>
                                <p className="text-sm text-muted-foreground">{project.leaderRole}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card/50 border border-border rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="font-medium text-foreground">{project.location}</p>
                    </div>
                </div>
                <div className="bg-card/50 border border-border rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-400/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground">Beneficiaries</p>
                        <p className="font-medium text-foreground">{project.beneficiaries} people</p>
                    </div>
                </div>
                <div className="bg-card/50 border border-border rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-400/20 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground">Established</p>
                        <p className="font-medium text-foreground">{project.establishedYear}</p>
                    </div>
                </div>
                <div className="bg-card/50 border border-border rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground">Contact</p>
                        <p className="font-medium text-foreground text-sm truncate max-w-[120px]">
                            {project.contactEmail || "Not set"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Description & Sections */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Description */}
                    <div className="bg-card border border-border rounded-xl">
                        <div className="p-5 border-b border-border">
                            <h2 className="text-lg font-semibold text-foreground">About This Project</h2>
                        </div>
                        <div className="p-5">
                            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>
                    </div>

                    {/* Dynamic Sections */}
                    {project.sections.map((section, index) => (
                        <div key={section.id || index} className="bg-card border border-border rounded-xl">
                            <div className="p-5 border-b border-border">
                                <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
                            </div>
                            <div className="p-5">
                                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-6">
                    {/* Tags */}
                    <div className="bg-card border border-border rounded-xl">
                        <div className="p-4 border-b border-border">
                            <h3 className="font-semibold text-foreground">Categories & Tags</h3>
                        </div>
                        <div className="p-4">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={tag || index}
                                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Volunteer Opportunities */}
                    <div className="bg-card border border-border rounded-xl">
                        <div className="p-4 border-b border-border">
                            <h3 className="font-semibold text-foreground flex items-center gap-2">
                                <HandHeart className="w-5 h-5 text-primary" />
                                Volunteer Opportunities
                            </h3>
                        </div>
                        <div className="p-4 space-y-4">
                            {project.volunteerOpportunities.map((opp, index) => (
                                <div key={opp.id || index}>
                                    <h4 className="font-medium text-foreground text-sm">{opp.title}</h4>
                                    <p className="text-xs text-muted-foreground mt-1">{opp.description}</p>
                                    {index < project.volunteerOpportunities.length - 1 && (
                                        <div className="border-b border-border mt-3" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {project.website && (
                        <div className="bg-card border border-border rounded-xl">
                            <div className="p-4 border-b border-border">
                                <h3 className="font-semibold text-foreground">External Links</h3>
                            </div>
                            <div className="p-4">
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-primary hover:underline"
                                >
                                    <Globe className="w-4 h-4" />
                                    Visit Website
                                </a>
                            </div>
                        </div>
                    )}

                    {/* Metadata */}
                    <div className="bg-card/50 border border-border rounded-xl p-4 text-xs text-muted-foreground space-y-1">
                        <p>Created: {new Date(project.createdAt).toLocaleDateString()}</p>
                        <p>Last Updated: {new Date(project.updatedAt).toLocaleDateString()}</p>
                        <p>Project ID: {project.id}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ViewProjectDetail;