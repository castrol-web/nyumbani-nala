interface ProjectCardProps {
    projectTitle?: string,
    summary: string,
    projectImage?: string,
}

function ProjectCard({ projectTitle, summary, projectImage }: ProjectCardProps) {
    return (
        <div className="card shadow-sm">
            <div>
                <div className="relative overflow-hidden">
                    <img
                        src={projectImage}
                        className="w-full h-48 object-cover rounded-t-md"
                    />

                    {/*Wave  svg*/}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                        <svg
                            className="block w-[200%] h-16 animate-wave"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,60 C150,20 300,100 450,60 C600,20 750,100 900,60 C1050,20 1200,100 1350,60 V120 H0 Z"
                                fill="#F9DFDF"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <h2 className="text-2xl font-bold">{projectTitle}</h2>
                <p className="text-sm">{summary}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-outline">Learn more</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
