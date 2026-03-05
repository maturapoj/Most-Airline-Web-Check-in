"use client";

import { useCheckin } from "@/store/CheckinContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface StepGuardProps {
    children: ReactNode;
}

/**
 * StepGuard handles route protection by checking the current state
 * against the current path. If a user tries to access a step they
 * haven't qualified for, they are redirected to the appropriate step.
 */
export function StepGuard({ children }: StepGuardProps) {
    const { state } = useCheckin();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Step 1: /checkin - Always open (unless redirected from root)

        // Step 2: /select-pax - Requires PNR and Last Name
        if (pathname === "/select-pax") {
            if (!state.pnr || !state.lastName) {
                router.replace("/checkin");
            }
        }

        // Step 3: /pax-info - Requires selected passengers
        if (pathname === "/pax-info") {
            const selectedCount = state.passengers.filter(p => p.selected).length;
            if (selectedCount === 0) {
                router.replace("/select-pax");
            }
        }

        // Step 4: /dangerous-good - Requires passenger details
        if (pathname === "/dangerous-good") {
            const selectedPassengers = state.passengers.filter(p => p.selected);
            const isValid = selectedPassengers.length > 0 && selectedPassengers.every(
                (p) => p.nationality && p.phone
            );
            if (!isValid) {
                router.replace("/pax-info");
            }
        }

        // Step 5: /boarding-pass - Requires accepted dangerous goods
        if (pathname === "/boarding-pass") {
            if (!state.acceptedDangerousGoods) {
                router.replace("/dangerous-good");
            }
        }

        // Redirect root to checkin
        if (pathname === "/") {
            router.replace("/checkin");
        }

    }, [pathname, state, router]);

    return <>{children}</>;
}
