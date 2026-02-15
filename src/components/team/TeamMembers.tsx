import Member from "./Member";
import needy from "../../assets/needy.jpg";
import partner from "../../assets/partner.jpeg";
import volunteer from "../../assets/volunteer.png";

function TeamMembers() {
    return (
        <div className="text-center justify-center my-20 mx-auto items-center">
            <div className="px-4">
                <div className="mx-auto mb-2 w-1/2 bg-linear-to-r from-[#F63049] via-[#D02752] to-[#8A244B] text-white py-4 rounded-lg flex justify-center items-center">
                    <hr className="w-1/6 border-t-2 border-white mr-4"></hr>
                    <span className="text-xl font-bold">MEET OUR TEAM</span>
                    <hr className="w-1/6 border-t-2 border-white ml-4"></hr>
                </div>
                <p className="mt-2 text-lg max-w-lg mx-auto">
                    A passionate team dedicated to guiding you through every step of your job and visa journey.
                </p>
            </div>


            {/* Team members */}
            <div className="py-12 lg:px-16 mx-auto text-center justify-center items-center">
                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto text-center justify-center">
                        <Member position="Founder" url={needy} />
                        <Member position="Donation organizer" url={partner} />
                        <Member position="Researcher" url={volunteer} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamMembers;