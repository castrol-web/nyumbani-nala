import AboutSection from "../about/AboutSection";
import GetInvolvedCards from "../components/Actions/GetInvolvedCards"
import ImpactSection from "../components/ImpactSection";
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
            <ImpactSection />
            <Testimonials />
        </div>
    )
}
export default Home