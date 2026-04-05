import { FaDollarSign } from "react-icons/fa";
import { GiLoveMystery } from "react-icons/gi";
import StatsCards from "./StatsCards";
import DonationChart from "./DonationChart";
import DonationsTable from "./DonationsTable";


function OverviewView() {
  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          Welcome back, Admin!
        </h2>
        <p className="text-muted-foreground text-gray-400">
          Here's what's happening with your fundraising today.
        </p>
      </div>
      <div className="flex gap-6">
        <StatsCards
          title="Total Raised"
          value="3978"
          icon={FaDollarSign}
          trend="10%"
          trendDirection="up"
        />
        <StatsCards
          title="Projects sponsored"
          value="78"
          icon={GiLoveMystery}
          trend="25%"
          trendDirection="up"
        />
      </div>
      <div>
        <DonationChart />
      </div>


      {/* Table and Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DonationsTable />
        </div>
        
      </div>
    </div>
  )
}

export default OverviewView;
