// models/booking.ts

/**
 * Types for booking retrieval response.
 */
export interface BookingPassenger {
    id: string;
    name: string;
    type: string; // e.g., "ADT"
    seat: string;
    selected: boolean;
}

export interface BookingData {
    pnr: string;
    lastName: string;
    passengers: BookingPassenger[];
}

export interface BookingResponse {
    status: string;
    data: BookingData;
}
