"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCheckin } from "@/store/CheckinContext";
import { StepHeader } from "@/components/StepHeader";
import { PrimaryButton } from "@/components/PrimaryButton";

export default function PaxInfoPage() {
    const router = useRouter();
    const { state, updatePassengerDetails } = useCheckin();

    const selectedPassengers = state.passengers.filter((p) => p.selected);

    // Local state to track validity of all forms
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (selectedPassengers.length === 0) {
            router.push("/select-pax");
        }
    }, [selectedPassengers, router]);

    useEffect(() => {
        // Check if every selected pax has both nationality and phone length > 5
        const allValid = selectedPassengers.every(
            (p) => p.nationality && p.nationality.length >= 2 && p.phone && p.phone.length > 5
        );
        setIsValid(allValid);
    }, [selectedPassengers]);

    const handleContinue = () => {
        if (isValid) {
            router.push("/dangerous-good");
        }
    };

    const handleBack = () => {
        router.push("/select-pax");
    };

    if (selectedPassengers.length === 0) return null;

    return (
        <div className="w-full min-h-screen flex flex-col bg-slate-50 animate-in fade-in slide-in-from-right-4 duration-300">
            <StepHeader
                step={3}
                title="Passenger Details"
                subtitle="Enter required information for each passenger"
            />

            <div className="flex-1 overflow-y-auto px-4 py-8 md:px-8 max-w-2xl mx-auto w-full pb-32">
                <div className="flex flex-col gap-6">
                    {selectedPassengers.map((pax, index) => (
                        <div
                            key={pax.id}
                            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4"
                        >
                            <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2">
                                {index + 1}. {pax.name}
                            </h3>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-slate-700">
                                    Nationality (2-letter code)
                                </label>
                                <input
                                    type="text"
                                    maxLength={2}
                                    value={pax.nationality || ""}
                                    onChange={(e) =>
                                        updatePassengerDetails(pax.id, {
                                            nationality: e.target.value.toUpperCase(),
                                            phone: pax.phone || "",
                                        })
                                    }
                                    placeholder="e.g. TH, US"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#2F6FED] focus:bg-white transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-slate-700">
                                    Phone Number
                                </label>
                                <div className="flex gap-2">
                                    <select
                                        className="w-24 px-2 tracking-tighter py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#2F6FED] bg-white transition-colors appearance-none text-center"
                                        defaultValue="+66"
                                    >
                                        <option value="+66">🇹🇭 +66</option>
                                        <option value="+1">🇺🇸 +1</option>
                                        <option value="+44">🇬🇧 +44</option>
                                        <option value="+65">🇸🇬 +65</option>
                                    </select>
                                    <input
                                        type="tel"
                                        value={pax.phone || ""}
                                        onChange={(e) =>
                                            updatePassengerDetails(pax.id, {
                                                nationality: pax.nationality || "",
                                                phone: e.target.value,
                                            })
                                        }
                                        placeholder="e.g. 811234567"
                                        className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#2F6FED] focus:bg-white transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
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
                        <PrimaryButton onClick={handleContinue} disabled={!isValid}>
                            Continue
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
