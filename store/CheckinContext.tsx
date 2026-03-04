"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Passenger {
    id: string;
    name: string;
    type: string; // e.g., "ADT"
    seat: string;
    selected: boolean;
    nationality?: string;
    phone?: string;
}

interface CheckinState {
    pnr: string;
    lastName: string;
    passengers: Passenger[];
    acceptedDangerousGoods: boolean;
}

interface CheckinContextType {
    state: CheckinState;
    setBookingInfo: (lastName: string, pnr: string) => void;
    setPassengers: (passengers: Passenger[]) => void;
    togglePassengerSelection: (id: string) => void;
    selectAllPassengers: () => void;
    clearAllPassengers: () => void;
    updatePassengerDetails: (
        id: string,
        details: { nationality: string; phone: string }
    ) => void;
    setAcceptedDangerousGoods: (accepted: boolean) => void;
}

const initialState: CheckinState = {
    pnr: "",
    lastName: "",
    passengers: [],
    acceptedDangerousGoods: false,
};

const CheckinContext = createContext<CheckinContextType | undefined>(undefined);

export function CheckinProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<CheckinState>(initialState);

    const setBookingInfo = (lastName: string, pnr: string) => {
        setState((prev) => ({ ...prev, lastName, pnr }));
    };

    const setPassengers = (passengers: Passenger[]) => {
        setState((prev) => ({ ...prev, passengers }));
    };

    const togglePassengerSelection = (id: string) => {
        setState((prev) => ({
            ...prev,
            passengers: prev.passengers.map((p) =>
                p.id === id ? { ...p, selected: !p.selected } : p
            ),
        }));
    };

    const selectAllPassengers = () => {
        setState((prev) => ({
            ...prev,
            passengers: prev.passengers.map((p) => ({ ...p, selected: true })),
        }));
    };

    const clearAllPassengers = () => {
        setState((prev) => ({
            ...prev,
            passengers: prev.passengers.map((p) => ({ ...p, selected: false })),
        }));
    };

    const updatePassengerDetails = (
        id: string,
        details: { nationality: string; phone: string }
    ) => {
        setState((prev) => ({
            ...prev,
            passengers: prev.passengers.map((p) =>
                p.id === id ? { ...p, ...details } : p
            ),
        }));
    };

    const setAcceptedDangerousGoods = (accepted: boolean) => {
        setState((prev) => ({ ...prev, acceptedDangerousGoods: accepted }));
    };

    return (
        <CheckinContext.Provider
            value={{
                state,
                setBookingInfo,
                setPassengers,
                togglePassengerSelection,
                selectAllPassengers,
                clearAllPassengers,
                updatePassengerDetails,
                setAcceptedDangerousGoods,
            }}
        >
            {children}
        </CheckinContext.Provider>
    );
}

export function useCheckin() {
    const context = useContext(CheckinContext);
    if (context === undefined) {
        throw new Error("useCheckin must be used within a CheckinProvider");
    }
    return context;
}
