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
        active: "bg-emerald-500/20 text-emerald-400",
        paused: "bg-amber-500/20 text-amber-400",
        completed: "bg-blue-500/20 text-blue-400",
    }

    return (

        <>
            <div className="mt-[118px] space-y-10">

                {/* Back Button */}
                <div className="pt-5 ml-3">
                    < button
                        onClick={onBack}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition btn bg-[#F63049]/50 hover:bg-[#F63049] outline-1 outline-[#F63049] text-white px-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </button >
                </div>

                {/* HERO */}
                < div className="relative h-[340px] overflow-hidden" >

                    <img
                        src={project.coverImage}
                        alt={project.name}
                        className="w-full h-full object-cover"
                    />

                    {/* overall darkening */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* stronger bottom gradient for text */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent" />

                    <div className="absolute bottom-0 p-8 max-w-xl text-white">

                        <span
                            className={`px-3 py-1 text-xs rounded-full capitalize backdrop-blur-sm ${statusStyles[project.status]}`}
                        >
                            {project.status}
                        </span>

                        <h1 className="text-4xl font-bold mt-3 drop-shadow-md">
                            {project.name}
                        </h1>

                        <p className="text-gray-200 mt-2 drop-shadow-sm">
                            {project.subtitle}
                        </p>

                        <div className="flex items-center gap-3 mt-5">

                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center font-semibold">
                                {project.leader.charAt(0)}
                            </div>

                            <div>
                                <p className="text-sm font-medium drop-shadow-sm">{project.leader}</p>
                                <p className="text-xs text-gray-300">{project.leaderRole}</p>
                            </div>

                        </div>

                    </div>
                </div >
            </div>
            <div className="lg:mx-10 mt-5 mx-3">

                {/* PROJECT STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-3">

                    <Stat icon={<MapPin />} label="Location" value={project.location} />
                    <Stat icon={<Users />} label="Beneficiaries" value={`${project.beneficiaries} people`} />
                    <Stat icon={<Calendar />} label="Established" value={project.establishedYear} />
                    <Stat icon={<Mail />} label="Contact" value={project.contactEmail || "Not set"} />

                </div>

                {/* MAIN CONTENT */}
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2 space-y-10">

                        <Section title="About This Project">
                            <p className="text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>
                        </Section>

                        {project.sections.map((section, index) => (
                            <Section key={section.id || index} title={section.title}>
                                <p className="text-muted-foreground leading-relaxed">
                                    {section.content}
                                </p>
                            </Section>
                        ))}

                    </div>

                    {/* SIDEBAR */}
                    <div className="space-y-8">

                        {/* TAGS */}
                        <Section title="Categories & Tags">

                            <div className="flex flex-wrap gap-2">

                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1 rounded-full bg-secondary/60"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>

                        </Section>

                        {/* VOLUNTEER */}
                        <Section
                            title={
                                <span className="flex items-center gap-2">
                                    <HandHeart className="w-4 h-4 text-primary" />
                                    Volunteer Opportunities
                                </span>
                            }
                        >

                            <div className="space-y-4">

                                {project.volunteerOpportunities.map((opp, index) => (
                                    <div key={opp.id || index} className="p-4 outline-1 outline-[#d1d5db]/60 rounded-md">
                                        <h4 className="font-medium text-sm">
                                            {opp.title}
                                        </h4>

                                        <p className="text-xs text-muted-foreground mt-1">
                                            {opp.description}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </Section>

                        {/* WEBSITE */}
                        {project.website && (
                            <Section title="External Link">

                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-primary hover:underline"
                                >
                                    <Globe className="w-4 h-4" />
                                    Visit Website
                                </a>

                            </Section>
                        )}

                    </div>
                </div>
            </div>
            {/* FOOTER META */}
            <div className="text-xs text-muted-foreground flex flex-wrap gap-6 pt-6 border-t border-muted/30 mt-3 mx-auto text-center">

                <div className="mx-auto flex gap-3">
                    <p>Created : <span className="text-gray-400">{new Date(project.createdAt).toLocaleDateString()}</span></p>
                    <p>Updated : <span className="text-gray-400">{new Date(project.updatedAt).toLocaleDateString()}</span></p>
                </div>
            </div>
        </>
    )
}

export default ViewProjectDetail


function Section({ title, children }: any) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">
                {title}
            </h2>
            {children}
        </div>
    )
}


function Stat({ icon, label, value }: any) {
    return (
        <div className="flex mx-auto gap-3">

            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {icon}
            </div>

            <div>
                <p className="text-xs text-muted-foreground">
                    {label}
                </p>
                <p className="font-medium">
                    {value}
                </p>
            </div>

        </div>
    )
}