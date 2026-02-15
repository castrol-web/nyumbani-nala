import AboutSection from "../about/AboutSection";
import GetInvolvedCards from "../components/Actions/GetInvolvedCards"
import FAQs from "../components/frequentlyaskedquestions/FAQs";
import Mainheader from "../components/Mainheader";
import StatsView from "../components/stats/StatsView";
import { Testimonials } from "../components/Testimonials";

function Home() {
    return (
        <div>
            <Mainheader />
            <AboutSection />
            {/* actions to be done */}
            <GetInvolvedCards />
            <StatsView />
            <FAQs />
            <Testimonials />
        </div>
    )
}
export default Home