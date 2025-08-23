"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Sending...");

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("✅ Subscribed successfully!");
      setEmail("");
    } else {
      setMessage("❌ " + (data.error || "Failed to subscribe"));
    }
  };

  return (
    <form onSubmit={subscribe} className="p-4 bg-gray-100 rounded-lg">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Subscribe
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </form>
  );
}
