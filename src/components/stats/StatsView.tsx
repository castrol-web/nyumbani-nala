import StatCard from "./StatCard";
import { FaHandsHelping, FaHeartbeat, FaBookOpen } from "react-icons/fa";

function StatsView() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                <StatCard
                    icon={FaHandsHelping}
                    end={500}
                    title="People Helped"
                    description="Lives impacted through relief and support."
                    color="text-red-500"
                />
                <StatCard
                    icon={FaHeartbeat}
                    end={200}
                    title="Charity Projects"
                    description="Free healthcare and wellness outreach."
                    color="text-pink-500"
                />
                <StatCard
                    icon={FaBookOpen}
                    end={350}
                    title="Educational Grants"
                    description="Opportunities created for young minds."
                    color="text-blue-500"
                />
            </div>
        </section>
    )
}

export default StatsView