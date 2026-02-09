
interface ProjectCardProps {
    title?: string;
    summary: string;
    projectImage?: string;
    onLearnMore?: () => void;
}

function ProjectCard({ title, summary, projectImage, onLearnMore }: ProjectCardProps) {
    //truncate the summary to 100 characters
    const truncateText = (text: string, wordLimit: number) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    }

    return (
        <>
            <div className="card shadow-sm outline-1 outline-gray-300 hover:shadow-md transition" data-aos="slide-up">
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
                                    fill="#F6EFD2"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-sm">{truncateText(summary, 10)}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-outline" onClick={onLearnMore}>Learn more</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProjectCard;
