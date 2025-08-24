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
    <form
  onSubmit={subscribe}
  className="w-full max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4"
>
  <h2 className="text-xl font-semibold text-gray-800 text-center">
    Join Our Newsletter
  </h2>
  <p className="text-sm text-gray-500 text-center">
    Stay updated with the latest news and updates from Gridiola.
  </p>

  <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="flex-1 px-4 py-2 outline-none text-gray-700"
    />
    <button
      type="submit"
      className="px-5 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
    >
      Subscribe
    </button>
  </div>

  {message && (
    <p className="mt-2 text-sm text-center text-green-600">{message}</p>
  )}
</form>

  );
}
