import GetInvolvedCards from "../components/Actions/GetInvolvedCards"
import Mainheader from "../components/Mainheader";

function Home() {
    return (
        <div>
            <Mainheader />
            {/* actions to be done */}
            <GetInvolvedCards />
        </div>
    )
}
export default Home