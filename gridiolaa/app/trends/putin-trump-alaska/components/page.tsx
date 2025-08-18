"use client";

import { Form } from "@/app/components/Form";
import React from "react";

export default function Home() {
  const [name, setName] = React.useState('');
  const [message1, setMessage1] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [thankYou, setThankYou] = React.useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage1(event.target.value);

  const onFormSubmitted = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/FeedBack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message1 })
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setName('');
        setMessage1('');
        setThankYou(true); // show thank-you
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div>
      {thankYou ? (
        <div className="text-center mt-8 text-green-600 text-xl font-bold">
          🎉 Thank you for your advice! We really appreciate it.
        </div>
      ) : (
        <Form
          name={name}
          message1={message1}
          isLoading={loading}
          nameChange={handleNameChange}
          messageChange={handleMessageChange}
          onsubmit={onFormSubmitted}
        />
      )}
    </div>
  );
}
