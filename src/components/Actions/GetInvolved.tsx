import type { IconType } from "react-icons";
type GetInvolvedCardsProps = {
    name: string;
    description: string;
    imageUrl: string;
    action: string;
    Icon: IconType;
}

const navigateToAction = (action: string) => {
    switch (action) {
        case "Support the most vulnerable":
            window.location.href = "/donate";
            break;      
        case "Join Us":
            window.location.href = "/contact";
            break;  
        case "View Projects":
            window.location.href = "/our-projects";
            break;
        default:
            break;
    }
}

function GetInvolved({ name, description, imageUrl, action, Icon }: GetInvolvedCardsProps) {
    return (
        <>
            <div className="card bg-base-100 image-full w-96 shadow-sm" data-aos="slide-up">
                <figure>
                    <img
                        src={imageUrl}
                        alt={imageUrl + name} />
                </figure>
                <div className="card-body">
                    <span className="items-cente justify-center mx-auto text-3xl"><Icon /></span>
                    <h2 className="font-bold text-center text-3xl text-[#E43636]">{name}</h2>
                    <p className="text-center">{description}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary btn-outline" onClick={() => navigateToAction(action)}>{action}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetInvolved