import type { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
type GetInvolvedCardsProps = {
    name: string;
    description: string;
    imageUrl: string;
    action: string;
    Icon: IconType;
}



function GetInvolved({ name, description, imageUrl, action, Icon }: GetInvolvedCardsProps) {
    const navigate = useNavigate();

    const navigateToAction = (action: string) => {
        switch (action) {
            case "Make a Donation":
                navigate("/donate");
                break;
            case "Create hope":
                navigate("/partner");
                break;
            case "Volunteer":
                navigate("/volunteer");
                break;
            default:
                break;
        }
    }
    return (
        <>
            <div className="card bg-base-100 image-full w-full shadow-sm" data-aos="slide-up">
                <figure>
                    <img
                        src={imageUrl}
                        alt={imageUrl + name} className="w-full h-60 object-cover" />
                </figure>
                <div className="card-body">
                    <span className="items-center justify-center mx-auto text-3xl"><Icon /></span>
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