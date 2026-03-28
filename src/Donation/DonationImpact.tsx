import { useState, type JSX } from "react";
import { FaBook, FaUtensils, FaTshirt, FaHome } from "react-icons/fa";

interface DonationImpactProps {
    amount: number;
}
function DonationImpact() {
    const [amount, setAmount] = useState(25);
    const getImpact = ({ amount }: DonationImpactProps) => {
        if (amount <= 25) {
            return [
                { icon: <FaUtensils />, text: "Provides meals for children in need" },
            ];
        }

        if (amount <= 75) {
            return [
                { icon: <FaBook />, text: "Helps buy school supplies for a child" },
                { icon: <FaUtensils />, text: "Provides daily meals" },
            ];
        }

        if (amount <= 150) {
            return [
                { icon: <FaBook />, text: "Supports education materials" },
                { icon: <FaUtensils />, text: "Provides meals for several children" },
                { icon: <FaTshirt />, text: "Helps provide clothing" },
            ];
        }

        if (amount <= 300) {
            return [
                { icon: <FaBook />, text: "Supports education for a child" },
                { icon: <FaUtensils />, text: "Provides meals" },
                { icon: <FaTshirt />, text: "Clothing assistance" },
                { icon: <FaHome />, text: "Supports shelter maintenance" },
            ];
        }

        return [
            { icon: <FaBook />, text: "Full educational support for a child" },
            { icon: <FaUtensils />, text: "Daily meals" },
            { icon: <FaTshirt />, text: "Clothing support" },
            { icon: <FaHome />, text: "Shelter and safety support" },
        ];
    }
    const impacts = getImpact({amount });
    return (
        <div className="mx-auto p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Make an Impact ❤️
            </h2>

            <div className="text-center text-3xl font-semibold mb-4 text-slate-50">
                ${amount}
            </div>
            <input
                type="range"
                min="10"
                max="500"
                className="w-full"
                value={amount}
                onChange={(e) => {
                    setAmount(Number(e.target.value));
                }}>
            </input>
            <div className="flex justify-between text-sm mt-2 text-slate-50">
                <span>$5</span>
                <span>$500</span>
            </div>
            <p className="text-center text-slate-300 mb-6">
                {impacts.map((impact: { icon: JSX.Element; text: string }, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg"
                    >
                        <div className="text-green-600 text-xl">{impact.icon}</div>
                        <p>{impact.text}</p>
                    </div>
                ))}
            </p>
        </div >
    )
}

export default DonationImpact