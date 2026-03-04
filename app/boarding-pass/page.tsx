"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCheckin } from "@/store/CheckinContext";
import { StepHeader } from "@/components/StepHeader";
import { BoardingCard } from "@/components/BoardingCard";
import { CheckCircle } from "lucide-react";

export default function BoardingPassPage() {
    const router = useRouter();
    const { state } = useCheckin();

    const selectedPassengers = state.passengers.filter((p) => p.selected);

    useEffect(() => {
        // If somehow arrived here without accepting dangerous goods or selecting passengers
        if (selectedPassengers.length === 0 || !state.acceptedDangerousGoods) {
            router.push("/checkin");
        }
    }, [selectedPassengers, state.acceptedDangerousGoods, router]);

    const handleDone = () => {
        // Usually clears state and redirects to home
        router.push("/");
    };

    if (selectedPassengers.length === 0 || !state.acceptedDangerousGoods) return null;

    return (
        <div className="w-full min-h-screen flex flex-col bg-slate-50 animate-in fade-in slide-in-from-right-4 duration-300">
            <StepHeader
                step={5}
                title="Check-in Complete"
                subtitle="Here are your boarding passes"
            />

            <div className="flex-1 overflow-y-auto px-4 py-8 md:px-8 max-w-[600px] mx-auto w-full pb-32">
                <div className="flex items-center justify-center gap-3 mb-8 bg-green-50 text-green-700 p-4 rounded-2xl border border-green-200 shadow-sm">
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
            <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-200 p-4 md:p-6 pb-safe z-10">
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
