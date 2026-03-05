"use client";

import { Moon, Sun } from "lucide-react";
import { useCheckin } from "@/store/CheckinContext";

export function ThemeToggle() {
    const { state, toggleDarkMode } = useCheckin();

    return (
        <button
            onClick={toggleDarkMode}
            className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-amber-400 transition-colors z-50 focus:outline-none"
            aria-label="Toggle Dark Mode"
        >
            {state.isDarkMode ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
}
