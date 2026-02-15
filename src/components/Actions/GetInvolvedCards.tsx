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
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center mt-2">
        {/* Heart Image */}
        <img className="h-12" src={heart} />
        {/* Text */}
      </div>
      <div className="mx-auto mb-2 w-1/3 bg-linear-to-r from-[#F63049] via-[#D02752] to-[#8A244B] text-white py-4 rounded-lg flex justify-center items-center">
        <hr className="w-1/6 border-t-2 border-white mr-4"></hr>
        <span className="text-xl font-bold">Get Involved</span>
        <hr className="w-1/6 border-t-2 border-white ml-4"></hr>
      </div>
      <div className="lg:flex grid sm:mx-0 justify-center items-center gap-1.5 w-full">
        <GetInvolved Icon={FaHandHoldingHeart} action={"Create hope"} name={"Become a partner"} description={" stand with us to build brighter futures"} imageUrl={partner} />
        <GetInvolved Icon={LuUsersRound} action={"Make a Donation"} name={"Make a Donation"} description={"every contribution opens a door for someone"} imageUrl={donate} />
        <GetInvolved Icon={FaHandsHelping} action={"Volunteer"} name={"Volunteer"} description={"change starts with you"} imageUrl={volunteer} />
      </div>
    </div>

  )
}

export default GetInvolvedCards;