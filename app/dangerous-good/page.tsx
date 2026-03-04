"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { TriangleAlert } from "lucide-react";
import { useCheckin } from "@/store/CheckinContext";
import { StepHeader } from "@/components/StepHeader";
import { PrimaryButton } from "@/components/PrimaryButton";

export default function DangerousGoodsPage() {
    const router = useRouter();
    const { state, setAcceptedDangerousGoods } = useCheckin();

    const selectedPassengers = state.passengers.filter((p) => p.selected);

    useEffect(() => {
        if (selectedPassengers.length === 0) {
            router.push("/select-pax");
        }
    }, [selectedPassengers, router]);

    const handleContinue = () => {
        if (state.acceptedDangerousGoods) {
            router.push("/boarding-pass");
        }
    };

    const handleBack = () => {
        router.push("/pax-info");
    };

    if (selectedPassengers.length === 0) return null;

    return (
        <div className="w-full min-h-screen flex flex-col bg-slate-50 animate-in fade-in slide-in-from-right-4 duration-300">
            <StepHeader
                step={4}
                title="Dangerous Goods"
                subtitle="Please read and accept our policy before continuing."
            />

            <div className="flex-1 overflow-y-auto px-4 py-8 md:px-8 max-w-2xl mx-auto w-full pb-32">
                <div className="bg-white p-6 md:p-8 rounded-3xl border border-red-100 shadow-sm flex flex-col gap-6 w-full">
                    <div className="flex items-center gap-4 text-red-500 bg-red-50 p-4 rounded-xl">
                        <TriangleAlert className="w-8 h-8 shrink-0" />
                        <p className="font-bold text-lg text-red-700 leading-tight">
                            Safety warning regarding prohibited items in your baggage.
                        </p>
                    </div>

                    <div className="text-slate-600 prose prose-sm md:prose-base font-medium">
                        <p className="mb-4">
                            For your safety and the safety of others on board, the following
                            items are strictly prohibited in both checked and carry-on
                            baggage:
                        </p>
                        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-red-500">
                            <li>Explosives, fireworks, and flares</li>
                            <li>Flammable liquids and solids (e.g., lighter fluid, matches)</li>
                            <li>Compressed gases (e.g., aerosols, oxygen cylinders)</li>
                            <li>Poisons and infectious substances</li>
                            <li>Corrosives (e.g., acids, alkalis, wet cell batteries)</li>
                            <li>Lithium batteries (power banks must be carried in cabin)</li>
                        </ul>
                    </div>

                    <label className="flex items-start gap-4 p-4 rounded-xl border-2 border-slate-100 bg-slate-50 cursor-pointer hover:border-[#2F6FED] transition-colors group mt-2">
                        <div className="relative flex items-center justify-center mt-1">
                            <input
                                type="checkbox"
                                checked={state.acceptedDangerousGoods}
                                onChange={(e) => setAcceptedDangerousGoods(e.target.checked)}
                                className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-slate-300 bg-white transition-all checked:border-[#2F6FED] checked:bg-[#2F6FED]"
                            />
                            <svg
                                className="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-200"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <p className="text-sm font-bold text-slate-800 leading-relaxed group-hover:text-slate-900 transition-colors">
                            I have read, understand, and accept the dangerous goods policy. I declare that my baggage does not contain any prohibited items.
                        </p>
                    </label>
                </div>
            </div>

            {/* Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-200 p-4 md:p-6 pb-safe z-10">
                <div className="max-w-[900px] mx-auto flex gap-4">
                    <button
                        onClick={handleBack}
                        className="w-1/3 py-3 px-6 rounded-xl font-semibold text-slate-700 bg-white border-2 border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                        Back
                    </button>
                    <div className="w-2/3">
                        <PrimaryButton
                            onClick={handleContinue}
                            disabled={!state.acceptedDangerousGoods}
                        >
                            Accept & Continue
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
