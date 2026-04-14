import Member from "./Member";
import needy from "../../assets/needy.jpg";
import partner from "../../assets/partner.jpeg";
import volunteer from "../../assets/volunteer.png";

function TeamMembers() {
    return (
        <div className="text-center justify-center my-20 mx-auto items-center">
            <div className="px-4">
                <div className="mx-auto mb-2   text-white py-4 rounded-lg flex justify-center items-center">
                    <hr className="w-1/6 border-t-2 border-white mr-4"></hr>
                    <span className="text-xl font-bold">MEET OUR LOCAL TEAM</span>
                    <hr className="w-1/6 border-t-2 border-white ml-4"></hr>
                </div>
                <p className="mt-2 text-lg max-w-lg mx-auto text-[#D02752]/80">
                    A passionate team dedicated to guiding you through every step of your job and visa journey.
                </p>
            </div>
            {/* members  here */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mx-3 mt-2 text-center justify-center items-center gap-4">
                <Member url={needy} position={"Orphanage director"} name={"Mapunda"} organization={"Msamaria children's Home"} details={"Orphanage director overseeing the care,education and protection of orphaned and vulnerable children"} />
                <Member position={"Orphanage & School Director"} url={partner} name={"Margaret"} organization={"Children Of Destiny Foundaton"} details={"Director of a children's home and school focused on education,sustainability and long-term opportunities."} />
                <Member position={"Project Director"} url={partner} name={"Gideon"} organization={"Delight Niche"} details={"Project director of a digital education initiative focused on informatics and technology skills for vulnerable communities."} />
                <Member position={"Founder & Academy Director"} url={volunteer} name={"Eli"} organization={"Moskisa Football Academy"} details={"Founder and Academy Director of a social football project combining sport,education and life skills."} />
                <Member position={"Center Director"} url={volunteer} name={"Eva"} organization={"Bonite Development Center"} details={"Center Director of a Montessori based education project supporting working mothers and community development."} />
            </div>
        </div>
    );
}

export default TeamMembers;