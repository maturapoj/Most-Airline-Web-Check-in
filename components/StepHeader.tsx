"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

interface StepHeaderProps {
    step: number;
    totalSteps?: number;
    title: string;
    subtitle?: string;
}

export function StepHeader({
    step,
    totalSteps = 5,
    title,
    subtitle,
}: StepHeaderProps) {
    const router = useRouter();

    const handleClose = () => {
        // Or you could route to home
        router.push("/");
    };

    return (
        <div className="w-full bg-white flex flex-col pt-4 px-6 md:px-8 border-b border-slate-200">
            <div className="flex justify-between items-start mb-4">
                <button
                    onClick={handleClose}
                    className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                    aria-label="Close check-in"
                >
                    <X className="w-5 h-5" />
                </button>
                <div className="text-right">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                        Step {step} of {totalSteps}
                    </p>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
                {subtitle && (
                    <p className="text-sm text-slate-500 mt-1 mb-4">{subtitle}</p>
                )}
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-1 bg-slate-100 flex mt-auto">
                <div
                    className="h-full bg-gradient-to-r from-[#2F6FED] to-[#4F8FF7] transition-all duration-300 ease-in-out rounded-r-full"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                />
            </div>
        </div>
    );
}
