import msamaria from "../../assets/msamaria.jpg"

function HowToHelp() {
    return (
        <div className="mt-28">
            <div className="lg:flex sm:grid items-center text-center justify-between mx-10 gap-10 flex-row-reverse mt-10">
                <div className="lg:w-2/3 items-center justify-center mx-auto mb-10">
                    <div className="mx-auto mb-2 w-1/2  text-white py-4 rounded-lg flex justify-center items-center">
                        <hr className="w-1/6 border-t-2 border-white mr-4"></hr>
                        <span className="text-xl font-bold">VOLUNTEER:</span>
                        <hr className="w-1/6 border-t-2 border-white ml-4"></hr>
                    </div>
                    <p className="text-sm" data-aos="zoom-out">
                        Volunteers are the heart of Nyumbani Nala, helping us create real change for children
                        in Tanzania.
                        Come alone, with a friend, or as a company—there's a place for you in our mission.
                        Volunteering isn`t just about giving; it's about learning, growing, and transforming
                        lives. Many volunteers say their lives changed completely.
                        You can join any of our projects, no matter your skills—we'll find something you'll
                        love! From computers, sports, food, education, and more, there's always a way to
                        make an impact.
                        Ready to make a difference?
                        Fill out the form below, and we'll contact you for a quick call to match you with the
                        best opportunity.
                    </p>
                </div>
                <div className="avatar" data-aos="slide-left">
                    <div className="mask mask-hexagon-2 w-80 h-80 mx-auto">
                        <img src={msamaria} alt="about image" />
                    </div>
                </div>
            </div>
            <div className="lg:flex sm:grid items-center text-center justify-between mx-10 gap-10  mt-10">
                <div className="lg:w-2/3 items-center justify-center mx-auto mb-10">
                    <div className="mx-auto mb-2 w-1/2  text-white py-4 rounded-lg flex justify-center items-center">
                        <hr className="w-1/6 border-t-2 border-white mr-4"></hr>
                        <span className="text-xl font-bold">COLABORATE:</span>
                        <hr className="w-1/6 border-t-2 border-white ml-4"></hr>
                    </div>
                    <p className="text-sm" data-aos="zoom-out">
                        With just $50 per year, you can fully cover the public school fees for one child in
                        Tanzania—providing access to education and a brighter future.
                        For $100, you can sponsor a weekend bootcamp for 10 children, giving them a
                        meaningful and educational weekend experience.
                        For around $50, you can provide a month of nutritious meals for one
                        child—ensuring they have the energy to learn, play, and grow
                    </p>
                </div>
                <div className="avatar" data-aos="slide-right">
                    <div className="mask mask-hexagon-2 w-80 h-80 mx-auto">
                        <img src={msamaria} alt="about image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToHelp