"use client";

import { useCheckin } from "@/store/CheckinContext";
import React, { ReactNode } from "react";

export function ThemeWrapper({ children }: { children: ReactNode }) {
    const { state } = useCheckin();

    React.useEffect(() => {
        if (state.isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [state.isDarkMode]);

    return (
        <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
            <main className="max-w-[900px] w-full mx-auto min-h-screen flex flex-col">
                {children}
            </main>
        </div>
    );
}
