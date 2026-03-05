"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCheckin } from "@/store/CheckinContext";
import { StepHeader } from "@/components/StepHeader";
import { BoardingCard } from "@/components/BoardingCard";
import { CheckCircle } from "lucide-react";

export default function BoardingPassPage() {
    const router = useRouter();
    const { state } = useCheckin();

    const selectedPassengers = state.passengers.filter((p) => p.selected);


    const handleDone = () => {
        // Usually clears state and redirects to home
        router.push("/");
    };

    if (selectedPassengers.length === 0 || !state.acceptedDangerousGoods) return null;

    return (
        <div className="w-full flex-1 flex flex-col bg-slate-50 dark:bg-slate-900 animate-in fade-in slide-in-from-right-4 duration-300 transition-colors">
            <StepHeader
                step={5}
                title="Check-in Complete"
                subtitle="Here are your boarding passes"
            />

            <div className="flex-1 overflow-y-auto px-4 py-8 md:px-8 max-w-[600px] mx-auto w-full pb-32">
                <div className="flex items-center justify-center gap-3 mb-8 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-4 rounded-2xl border border-green-200 dark:border-green-900/30 shadow-sm transition-colors">
                    <CheckCircle className="w-6 h-6 shrink-0" />
                    <p className="font-bold">You are successfully checked in!</p>
                </div>

                <div className="flex flex-col gap-6">
                    {selectedPassengers.map((pax) => (
                        <BoardingCard
                            key={pax.id}
                            passengerName={pax.name}
                            pnr={state.pnr}
                            type={pax.type}
                        />
                    ))}
                </div>
            </div>

            {/* Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 md:p-6 pb-safe z-20 transition-colors">
                <div className="max-w-[900px] mx-auto">
                    <button
                        onClick={handleDone}
                        className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#2F6FED] to-[#4F8FF7] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center text-lg"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}
