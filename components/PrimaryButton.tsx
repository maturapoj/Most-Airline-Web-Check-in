import React from "react";
import { Loader2 } from "lucide-react";

interface PrimaryButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isLoading?: boolean;
}

export function PrimaryButton({
    children,
    isLoading,
    className = "",
    disabled,
    ...props
}: PrimaryButtonProps) {
    const isDisabled = disabled || isLoading;

    return (
        <button
            disabled={isDisabled}
            className={`
        w-full py-3 px-6 rounded-xl font-semibold text-white transition-all
        ${isDisabled
                    ? "bg-slate-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#2F6FED] to-[#4F8FF7] hover:shadow-lg hover:-translate-y-0.5"
                }
        flex justify-center items-center
        ${className}
      `}
            {...props}
        >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : children}
        </button>
    );
}
