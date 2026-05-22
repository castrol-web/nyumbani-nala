import {
    MapPin,
    Users,
    Calendar,
    Mail,
    Globe,
    HandHeart,
    ArrowUpRight
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

function ViewProjectDetail({ project }: ProjectDetailProps) {
    const statusStyles = {
        active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-500/20",
        paused: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border-amber-200/50 dark:border-amber-500/20",
        completed: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200/50 dark:border-blue-500/20",
    }

    return (
        <div className="flex flex-col h-full bg-slate-50/50 dark:bg-slate-950/20">
            {/* COMPACT CLEAN HERO BANNER */}
            <div className="relative h-48 w-full shrink-0 bg-slate-100 dark:bg-slate-900">
                <img
                    src={project.coverImage}
                    alt={project.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                
                {/* Embedded Minimal Header Info over Image */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-0.5 text-xs font-semibold tracking-wide rounded-md border uppercase ${statusStyles[project.status]}`}>
                                {project.status}
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                            {project.name}
                        </h1>
                        <p className="text-sm text-slate-200 font-medium max-w-xl line-clamp-1">
                            {project.subtitle}
                        </p>
                    </div>

                    {/* Minimal Leader Badge */}
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 self-start sm:self-auto">
                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold text-sm text-white shadow-inner">
                            {project.leader.charAt(0)}
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-semibold text-white leading-none">{project.leader}</p>
                            <p className="text-[10px] text-slate-300 mt-0.5 leading-none">{project.leaderRole}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SCROLLABLE CONTENT BODY */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* NOTION-STYLE DASHBOARD STATS GRID */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Stat icon={<MapPin className="w-4 h-4" />} label="Location" value={project.location} />
                    <Stat icon={<Users className="w-4 h-4" />} label="Beneficiaries" value={`${project.beneficiaries.toLocaleString()} individuals`} />
                    <Stat icon={<Calendar className="w-4 h-4" />} label="Established" value={project.establishedYear} />
                    <Stat icon={<Mail className="w-4 h-4" />} label="Contact Partner" value={project.contactEmail || "Unavailable"} isEmail />
                </div>

                {/* TWO-COLUMN CONTENT SPLIT */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    
                    {/* Main Documentation Side */}
                    <div className="lg:col-span-2 space-y-6">
                        <Section title="Project Overview">
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-wrap">
                                {project.description}
                            </p>
                        </Section>

                        {project.sections?.map((section, index) => (
                            <Section key={section.id || index} title={section.title}>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-wrap">
                                    {section.content}
                                </p>
                            </Section>
                        ))}
                    </div>

                    {/* Sidebar Context Blocks */}
                    <div className="space-y-6">
                        {/* TAGS BAR */}
                        <Section title="Focus Areas">
                            <div className="flex flex-wrap gap-1.5 pt-1">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/40 transition-colors"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </Section>

                        {/* VOLUNTEER MODULE */}
                        {project.volunteerOpportunities && project.volunteerOpportunities.length > 0 && (
                            <Section 
                                title={
                                    <span className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                                        <HandHeart className="w-4 h-4 text-rose-500" />
                                        <span>Open Mobilizations</span>
                                    </span>
                                }
                            >
                                <div className="space-y-3 pt-1">
                                    {project.volunteerOpportunities.map((opp, index) => (
                                        <div key={opp.id || index} className="p-3.5 bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition shadow-xs">
                                            <h4 className="font-semibold text-xs text-slate-800 dark:text-slate-200">
                                                {opp.title}
                                            </h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                                                {opp.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Section>
                        )}

                        {/* EXTERNAL CALL TO ACTION LINKS */}
                        {project.website && (
                            <Section title="Resource Link">
                                <div className="pt-1">
                                    <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl text-xs font-semibold shadow-xs hover:opacity-90 transition-all group"
                                    >
                                        <span className="flex items-center gap-2">
                                            <Globe className="w-3.5 h-3.5" />
                                            Launch External Site
                                        </span>
                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </Section>
                        )}
                    </div>
                </div>

                {/* MODAL FOOTER METRICS */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-slate-800/60 text-[11px] text-slate-400 font-medium">
                    <p>Records entry: <span className="font-mono">{new Date(project.createdAt).toLocaleDateString()}</span></p>
                    <p>System sync: <span className="font-mono">{new Date(project.updatedAt).toLocaleDateString()}</span></p>
                </div>
            </div>
        </div>
    )
}

export default ViewProjectDetail

// Sub-component layouts mapped to block components
function Section({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {title}
            </h2>
            <div className="bg-white dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl p-4 shadow-2xs">
                {children}
            </div>
        </div>
    )
}

function Stat({ icon, label, value, isEmail }: { icon: React.ReactNode; label: string; value: string | number; isEmail?: boolean }) {
    return (
        <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl shadow-2xs overflow-hidden">
            <div className="w-8 h-8 shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                {icon}
            </div>
            <div className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 leading-none">
                    {label}
                </p>
                <p className={`text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 truncate ${isEmail ? 'hover:underline cursor-pointer text-blue-600 dark:text-blue-400' : ''}`}>
                    {value}
                </p>
            </div>
        </div>
    )
}