import {AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer} from "recharts"
import { monthlyDonationData} from "../../lib/mock-data"

function DonationChart() {
    return (
        <div className="bg-card border-border col-span-2 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div className="pb-2 @container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="text-lg text-foreground leading-none font-semibold">
                    Donation Trends
                </div>
                <p className="text-sm text-muted-foreground">
                    Monthly donation overview (€)
                </p>
            </div>
            <div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={monthlyDonationData}
                            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="donationGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#D02752" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#D02752" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#2A3F5F" />
                            <XAxis
                                dataKey="month"
                                stroke="#94A3B8"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#94A3B8"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#1A2B45",
                                    border: "1px solid #2A3F5F",
                                    borderRadius: "8px",
                                    color: "#F8FAFC",
                                }}
                                labelStyle={{ color: "#94A3B8" }}
                            />
                            <Area
                                type="monotone"
                                dataKey="donations"
                                stroke="#D02752"
                                strokeWidth={2}
                                fill="url(#donationGradient)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default DonationChart;