"use client";

import { Check } from "lucide-react";
import type { Passenger } from "@/store/CheckinContext";

interface PassengerCardProps {
    passenger: Passenger;
    onClick?: () => void;
    selectable?: boolean;
}

export function PassengerCard({
    passenger,
    onClick,
    selectable = false,
}: PassengerCardProps) {
    const isSelected = passenger.selected;

    return (
        <div
            onClick={selectable ? onClick : undefined}
            className={`
        relative p-4 rounded-2xl bg-white dark:bg-slate-800 border-2 transition-all group
        ${selectable
                    ? "cursor-pointer hover:-translate-y-0.5"
                    : "cursor-default border-slate-200 dark:border-slate-700"
                }
        ${selectable && isSelected
                    ? "border-[#2F6FED] shadow-[0_4px_20px_-4px_rgba(47,111,237,0.3)]"
                    : selectable
                        ? "border-transparent dark:border-transparent shadow-sm hover:shadow-md hover:border-slate-200 dark:hover:border-slate-600"
                        : "border-slate-200 dark:border-slate-700"
                }
      `}
        >
            {selectable && (
                <div
                    className={`
            absolute top-0 right-0 w-10 h-10 rounded-bl-2xl rounded-tr-xl flex items-center justify-center transition-colors
            ${isSelected ? "bg-[#2F6FED] text-white" : "bg-transparent"}
          `}
                >
                    {isSelected && <Check className="w-5 h-5" />}
                </div>
            )}

            <div className="flex flex-col transition-colors">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide">
                    {passenger.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                        {passenger.type}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        Seat {passenger.seat}
                    </span>
                </div>
            </div>
        </div>
    );
}
