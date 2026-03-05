// api/base.ts

/** Base URL for API calls. Uses NEXT_PUBLIC_API_URL if defined, otherwise defaults to the stubby server. */
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8882";

/** Generic POST request helper.
 * @param path API endpoint path (e.g. "/api/v1/booking/retrieve")
 * @param body Request payload
 * @returns Parsed JSON response
 */
export async function post<T>(path: string, body: any): Promise<T> {
    const response = await fetch(`${BASE_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        let errorMsg = "Request failed";
        try {
            const errData = await response.json();
            errorMsg = errData.message ?? errorMsg;
        } catch (_) { }
        throw new Error(errorMsg);
    }

    return (await response.json()) as T;
}
