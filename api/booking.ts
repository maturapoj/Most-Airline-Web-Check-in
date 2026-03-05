// api/booking.ts
import { post } from "./base";
import { BookingResponse, BookingData } from "@/models/booking";

/**
 * Specific helper for retrieving a booking.
 */
export async function fetchBooking(pnr: string, lastName: string): Promise<BookingData> {
    const result = await post<BookingResponse>("/api/v1/booking/retrieve", { pnr, lastName });
    return result.data;
}
