"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plane, Info, TriangleAlert } from "lucide-react";
import { useCheckin } from "@/store/CheckinContext";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ThemeToggle } from "@/components/ThemeToggle";
const MOCK_PASSENGERS = [
    {
        id: "p1",
        name: "ALEX HUUM",
        type: "ADT",
        seat: "12A",
        selected: true,
    },
    {
        id: "p2",
        name: "Somsee Kuum",
        type: "ADT",
        seat: "12B",
        selected: true,
    },
];

export default function CheckinPage() {
    const router = useRouter();
    const { setBookingInfo, setPassengers } = useCheckin();

    const [lastName, setLastName] = useState("");
    const [pnr, setPnr] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const isValid = lastName.length >= 2 && pnr.length >= 5;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValid) return;

        setIsLoading(true);
        setError(null);

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Simulated validation logic
        if (pnr.toUpperCase() === "ABC123" && lastName.toUpperCase() === "HUUM") {
            setBookingInfo(lastName.toUpperCase(), pnr.toUpperCase());
            setPassengers(MOCK_PASSENGERS);
            router.push("/select-pax");
        } else {
            setError("Booking not found. Please check your Last Name and PNR.");
        }
        setIsLoading(false);
    };

    return (
        <div className="w-full relative animate-in fade-in duration-500">

            {/* Background Gradient Detail */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F6FED]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* Theme Toggle Wrapper */}
            <div className="absolute top-6 right-6 md:right-8 flex gap-4">
                <ThemeToggle />
            </div>

            <div className="flex flex-col md:flex-row p-4 md:p-8 gap-8 md:gap-12 pt-16 md:pt-8 w-full">
                {/* Main Check-in Form Column */}
                <div className="flex-1 max-w-lg pt-8 md:pt-16">
                    <div className="mb-8 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2F6FED] to-[#4F8FF7] flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <Plane className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 tracking-tight">
                            Online Check-in
                        </h1>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-100 dark:border-slate-700 transition-colors">
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-2xl flex items-start gap-3 animate-in slide-in-from-top-2 duration-300">
                                <TriangleAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                                >
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value.toUpperCase())}
                                    placeholder="e.g. HUUM"
                                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#2F6FED] dark:focus:border-[#4F8FF7] focus:bg-white dark:focus:bg-slate-800 transition-colors font-medium uppercase tracking-wide"
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label
                                    htmlFor="pnr"
                                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                                >
                                    Booking Reference (PNR)
                                </label>
                                <input
                                    id="pnr"
                                    type="text"
                                    value={pnr}
                                    onChange={(e) => setPnr(e.target.value.toUpperCase())}
                                    placeholder="e.g. ABC123"
                                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#2F6FED] dark:focus:border-[#4F8FF7] focus:bg-white dark:focus:bg-slate-800 transition-colors font-medium uppercase tracking-wide"
                                    required
                                />
                            </div>

                            <PrimaryButton type="submit" disabled={!isValid} isLoading={isLoading}>
                                Retrieve Booking
                            </PrimaryButton>
                        </form>
                    </div>

                    <div className="mt-6 flex items-start gap-3 bg-blue-50/50 dark:bg-slate-800 p-4 rounded-2xl border border-blue-100/50 dark:border-slate-700 transition-colors">
                        <Info className="w-5 h-5 text-[#2F6FED] shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                            Check-in opens 48 hours to 90 minutes prior to departure. Use the 6-character PNR found in your confirmation email.
                        </p>
                    </div>
                </div>

                {/* Side Info Column (Desktop Tips) */}
                <div className="hidden md:flex flex-1 pt-16 flex-col gap-4 max-w-sm pl-8 border-l border-slate-200/60 dark:border-slate-700 transition-colors">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2 tracking-tight">Travel Tips</h3>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-2 transition-all hover:-translate-y-1 hover:border-[#2F6FED]">
                        <h4 className="font-bold text-[#2F6FED] dark:text-[#4F8FF7]">Fast Track Security</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Add fast track to your booking to bypass the lines and reach the lounge sooner.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-2 transition-all hover:-translate-y-1 hover:border-[#2F6FED]">
                        <h4 className="font-bold text-[#2F6FED] dark:text-[#4F8FF7]">Dangerous Goods</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Ensure you are familiar with prohibited items before arriving at the airport to avoid delays.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
