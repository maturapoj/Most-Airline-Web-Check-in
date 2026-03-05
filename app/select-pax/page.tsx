"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCheckin } from "@/store/CheckinContext";
import { StepHeader } from "@/components/StepHeader";
import { PassengerCard } from "@/components/PassengerCard";
import { PrimaryButton } from "@/components/PrimaryButton";

export default function SelectPaxPage() {
    const router = useRouter();
    const { state, togglePassengerSelection, selectAllPassengers, clearAllPassengers } = useCheckin();

    const { passengers } = state;

    useEffect(() => {
        // If no passengers loaded, redirect back
        if (passengers.length === 0) {
            router.push("/checkin");
        }
    }, [passengers, router]);

    const selectedCount = passengers.filter((p) => p.selected).length;
    const canContinue = selectedCount > 0;

    const handleContinue = () => {
        if (canContinue) {
            router.push("/pax-info");
        }
    };

    const handleBack = () => {
        router.push("/checkin");
    };

    if (passengers.length === 0) return null;

    return (
        <div className="w-full flex-1 flex flex-col bg-slate-50 dark:bg-slate-900 animate-in fade-in slide-in-from-right-4 duration-300 transition-colors">
            <StepHeader
                step={2}
                title="Select Passengers"
                subtitle="Choose passengers for check-in"
            />

            <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8 max-w-2xl mx-auto w-full pb-32">
                <div className="flex flex-col gap-4">
                    {passengers.map((pax) => (
                        <PassengerCard
                            key={pax.id}
                            passenger={pax}
                            selectable
                            onClick={() => togglePassengerSelection(pax.id)}
                        />
                    ))}
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={selectedCount === passengers.length ? clearAllPassengers : selectAllPassengers}
                        className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                    >
                        {selectedCount === passengers.length ? "✕ Clear All" : "✓ Select All"}
                    </button>
                </div>
            </div>

            {/* Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 md:p-6 pb-safe transition-colors z-20">
                <div className="max-w-[900px] mx-auto flex gap-4">
                    <button
                        onClick={handleBack}
                        className="w-1/3 py-3 px-6 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                        Back
                    </button>
                    <div className="w-2/3">
                        <PrimaryButton onClick={handleContinue} disabled={!canContinue}>
                            Continue
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
