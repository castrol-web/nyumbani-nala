import AboutSection from "../about/AboutSection";
import GetInvolvedCards from "../components/Actions/GetInvolvedCards"
import Mainheader from "../components/Mainheader";

function Home() {
    return (
        <div>
            <Mainheader />
            <AboutSection />
            {/* actions to be done */}
            <GetInvolvedCards />
        </div>
    )
}
export default Home