"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TriangleAlert } from "lucide-react";
import { useCheckin } from "@/store/CheckinContext";
import { StepHeader } from "@/components/StepHeader";
import { PrimaryButton } from "@/components/PrimaryButton";

export default function DangerousGoodsPage() {
    const router = useRouter();
    const { state, setAcceptedDangerousGoods } = useCheckin();

    const selectedPassengers = state.passengers.filter((p) => p.selected);


    const [isLoading, setIsLoading] = useState(false);

    const handleContinue = async () => {
        if (state.acceptedDangerousGoods) {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            router.push("/boarding-pass");
        }
    };

    const handleBack = () => {
        router.push("/pax-info");
    };

    if (selectedPassengers.length === 0) return null;

    return (
        <div className="w-full flex-1 flex flex-col bg-slate-50 dark:bg-slate-900 animate-in fade-in slide-in-from-right-4 duration-300 transition-colors">
            <StepHeader
                step={4}
                title="Dangerous Goods"
                subtitle="Please read and accept our policy before continuing."
            />

            <div className="flex-1 overflow-y-auto px-4 py-8 md:px-8 max-w-2xl mx-auto w-full pb-32">
                <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl border border-red-100 dark:border-red-900/30 shadow-sm flex flex-col gap-6 w-full transition-colors">
                    <div className="flex items-center gap-4 text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl transition-colors">
                        <TriangleAlert className="w-8 h-8 shrink-0" />
                        <p className="font-bold text-lg text-red-700 dark:text-red-400 leading-tight">
                            Safety warning regarding prohibited items in your baggage.
                        </p>
                    </div>

                    <div className="text-slate-600 dark:text-slate-300 prose prose-sm md:prose-base font-medium transition-colors">
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

                    <label className="flex items-start gap-4 p-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 cursor-pointer hover:border-[#2F6FED] transition-all group mt-2">
                        <div className="relative flex items-center justify-center mt-1">
                            <input
                                type="checkbox"
                                checked={state.acceptedDangerousGoods}
                                onChange={(e) => setAcceptedDangerousGoods(e.target.checked)}
                                className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 transition-all checked:border-[#2F6FED] checked:bg-[#2F6FED]"
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
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                            I have read, understand, and accept the dangerous goods policy. I declare that my baggage does not contain any prohibited items.
                        </p>
                    </label>
                </div>
            </div>

            {/* Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 md:p-6 pb-safe z-20 transition-colors">
                <div className="max-w-[900px] mx-auto flex gap-4">
                    <button
                        onClick={handleBack}
                        className="w-1/3 py-3 px-6 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                        Back
                    </button>
                    <div className="w-2/3">
                        <PrimaryButton
                            onClick={handleContinue}
                            disabled={!state.acceptedDangerousGoods}
                            isLoading={isLoading}
                        >
                            Accept & Continue
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
