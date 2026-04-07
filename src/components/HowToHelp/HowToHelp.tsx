import msamaria from "../../assets/msamaria.jpg"
import DonationImpact from "../../Donation/DonationImpact"

function HowToHelp() {
    return (
        <section className="py-20 mt-28 bg-linear-to-b from-slate-900 to-slate-950 text-white">

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* TEXT SIDE */}
                <div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-0.5 w-12 bg-[#F63049]" />
                        <span className="uppercase tracking-widest text-[#F63049] font-semibold">
                            COLLABORATE
                        </span>
                        <div className="h-0.5 w-12 bg-[#F63049]" />
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        Your support today can change
                        <span className="text-[#F63049]"> a life forever</span>
                    </h2>

                    <p className="text-slate-300 text-lg leading-relaxed">
                        At Nyumbani Nala, we work hand in hand with local NGOs to create
                        real opportunities for children and families in Moshi. Together we
                        build sustainable projects that transform lives and create a better
                        future.
                    </p>

                </div>

                {/* IMAGE SIDE */}
                <div className="flex justify-center">

                    <div className="relative">

                        <img
                            src={msamaria}
                            alt="children"
                            className="w-[380px] rounded-3xl shadow-2xl"
                        />

                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#F63049] rounded-3xl" />

                    </div>

                </div>

            </div>

            <div className="mt-24">
                <h2 className="text-3xl font-bold text-center mb-8">
                    See the impact of your donation ❤️
                </h2>
                <DonationImpact />
            </div>

        </section>
    )
}

export default HowToHelp