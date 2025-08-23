// pages/api/newsletter.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!, // Add your Brevo API key in .env
      },
      body: JSON.stringify({
        email,
        listIds: [2], // Replace with your Brevo list ID
        updateEnabled: true,
      }),
    });

    if (!response.ok) throw new Error("Failed to subscribe");
    res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}
