import "server-only";
import { Fixture } from "@/types";

export default async function getPlayers(): Promise<Fixture[]> {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY is missing in environment variables");
    }

    

    const API_KEY: string = process.env.API_KEY;
   
    const url = `https://v3.football.api-sports.io/fixtures?season=2024&league=78`;

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": API_KEY,
        },
        next: {
            revalidate: 15 * 1 * 1
        } // Fetch fresh data every 15 seconds
    };

    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data?.response;
    } catch (err) {
        console.error("Error fetching top scorers:", err);
        return [];
    }
}
