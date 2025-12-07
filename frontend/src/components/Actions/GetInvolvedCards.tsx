import GetInvolved from "./GetInvolved";
import partner from "../../assets/partner.jpeg";
import donate from "../../assets/donate.jpg";
import volunteer from "../../assets/volunteer.png";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { LuUsersRound } from "react-icons/lu";
import { FaHandsHelping } from "react-icons/fa";
import heart from "../../assets/heart.png";

function GetInvolvedCards() {
  return (
    <>
      <div className="flex flex-col items-center mt-2">
        {/* Heart Image */}
          <img className="h-12" src={heart}/>
        {/* Text */}
        <h1 className="text-2xl font-bold tracking-wide mb-2" style={{ fontFamily: "inherit" }}>
          GET INVOLVED
        </h1>
      </div>
      <div className="lg:flex grid mx auto justify-center items-center gap-1.5">
        <GetInvolved Icon={FaHandHoldingHeart} action={"Create hope"} name={"Become a partner"} description={"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia"} imageUrl={partner} />
        <GetInvolved Icon={LuUsersRound} action={"Support the most vulnerable"} name={"Make a Donation"} description={"Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."} imageUrl={donate} />
        <GetInvolved Icon={FaHandsHelping} action={"Be part of the team"} name={"Volunteer"} description={"Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"} imageUrl={volunteer} />
      </div>
    </>

  )
}

export default GetInvolvedCards;